import tensorflow as tf
import numpy as np

xy = np.loadtxt('train2.txt', unpack=True)
x_data = xy[0:-1]
y_data = xy[-1]


X = tf.placeholder(tf.float32)
Y = tf.placeholder(tf.float32)

W = tf.Variable(tf.random_uniform([1,len(x_data)], -1.0, 1.0))

h_ = tf.matmul(W,X)
h = tf.div(1., 1. + tf.exp(-h_))

cost = -tf.reduce_mean(Y*tf.log(h) + (1-Y)*tf.log(1-h))

a = tf.Variable(0.01)
optimizer = tf.train.GradientDescentOptimizer(a)
train = optimizer.minimize(cost)

init = tf.global_variables_initializer()

with tf.Session() as sess:
    sess.run(init)

    for step in xrange(1000):
        sess.run(train, feed_dict={X:x_data, Y:y_data})
        if step % 200 == 0:
            print step, sess.run(cost, feed_dict={X:x_data, Y:y_data}), sess.run(W)

    correct_predict = tf.equal(tf.floor(h+0.5), Y)

    acc = tf.reduce_mean(tf.cast(correct_predict, "float"))
    print sess.run([h,tf.floor(h+0.5), correct_predict, acc],feed_dict={X:x_data, Y:y_data})
    print "Accuracy: ", acc.eval({X:x_data, Y:y_data})
