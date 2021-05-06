---
layout: blog
title: 'Building a search engine from scratch'
date: '2021-04-01'
---

In this blog post I'm going to show how you can build a search engine from scratch.

1. Basic structure of a search engine
2. Implementing a MVP
   Hash map as term dict. Keys are the inverse index. Scoring inverse document frequency.
3. Improving the term dict
   FST
   Why we use FST
   How to implement a FST
   New queries this allows.
4. Improving the inverse index
   Skip lists
   Compression
5. Allowing for different analyzers
   lowercase
   n-gram
   stop words
6. Persistance

7. Incremental indexing
