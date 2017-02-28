#!/usr/local/bin/python
# -*- coding: utf-8 -*-

import tensorflow as tf
import numpy as np

xy = np.loadtxt('train.txt', unpack=True, dtype='float32')

x_data = xy[0:-1]
y_data = xy[-1]

X = tf.placeholder(tf.float32)
Y = tf.placeholder(tf.float32)


W = tf.Variable(tf.random_uniform([1,len(x_data)], -1.0, 1.0))

z = tf.matmul(W,X)
# tf.sigmoid(z)랑 동일
h = tf.div(1.,1.+tf.exp(-z))

# 크로스 엔트로피
cost = -tf.reduce_mean(Y*tf.log(h) + (1-Y)*tf.log(1-h))

a = tf.Variable(0.1)
optimizer = tf.train.GradientDescentOptimizer(a)
train = optimizer.minimize(cost)

init = tf.global_variables_initializer()
sess = tf.Session()
sess.run(init)

for step in xrange(2001):
    sess.run(train, feed_dict={X:x_data,Y:y_data})
    if step % 20 == 0:
        print step, sess.run(cost,feed_dict={X:x_data,Y:y_data}), sess.run(W)

print sess.run(cost, feed_dict={X: 12, Y: 3})
