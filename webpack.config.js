var path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const config = {
    mode: 'development',
    entry: {
        'home': './client/home.js',
    },
		output: {
			path: path.resolve(__dirname, 'public/javascripts'),
			filename: 'main.js',
			// this must be same as Express static use. 
			// Check ./app.js
			publicPath: '/javascripts/',
		},
	module: {
		rules: [
				{
						test: /\.vue$/,
						loader: 'vue-loader'
				},
				{
						test: /\.js$/,
						use: 'babel-loader',
						exclude: /node_modules/
				},
				{
						test: /\.css$/,
						use: [
								'vue-style-loader',
								'css-loader'
						]
			},
			{
				test: /\.pug$/,
				oneOf: [
					// this applies to `<template lang="pug">` in Vue components
					{
						resourceQuery: /^\?vue/,
						use: ['pug-plain-loader']
					},
					// this applies to pug imports inside JavaScript
					{
						use: ['raw-loader', 'pug-plain-loader']
					}
				]
			}
		]
	},
	resolve: {
    // extensions: [ '.tsx', '.ts', '.js', '.vue' ],
    alias: {
			// 'vue': '@vue/runtime-dom',
			'vue$': 'vue/dist/vue.esm.js'
    }
	},
	plugins: [
		new VueLoaderPlugin(),
	],
	watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
  },
};

module.exports = config;