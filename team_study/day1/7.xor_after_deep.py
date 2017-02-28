import tensorflow as tf
import numpy as np
 
xy = np.loadtxt('train2.txt', unpack=True)
x_data = np.transpose(xy[0:-1])
y_data = [[0],[1],[1],[0]]
 
X = tf.placeholder(tf.float32)
Y = tf.placeholder(tf.float32)
 
W1 = tf.Variable(tf.random_uniform([2,5], -1.0, 1.0))
W2 = tf.Variable(tf.random_uniform([5,3], -1.0, 1.0))
W3 = tf.Variable(tf.random_uniform([3,1], -1.0, 1.0))
 
b1 = tf.Variable(tf.zeros([5]), name="Bias1")
b2 = tf.Variable(tf.zeros([3]), name="Bias2")
b3 = tf.Variable(tf.zeros([1]), name="Bias3")
 
L2 = tf.sigmoid(tf.matmul(X,W1) + b1)
L3 = tf.sigmoid(tf.matmul(L2,W2) + b2)
h = tf.sigmoid(tf.matmul(L3,W3) + b3)
 
cost = -tf.reduce_mean(Y*tf.log(h) + (1-Y)*tf.log(1-h))
 
a = tf.Variable(0.05)
optimizer = tf.train.GradientDescentOptimizer(a)
train = optimizer.minimize(cost)
 
init = tf.global_variables_initializer()
 
with tf.Session() as sess:
        sess.run(init)
        print x_data
        print y_data
 
        for step in xrange(100000):
                sess.run(train, feed_dict={X:x_data, Y:y_data})
                if step % 200 == 0:
                        print step, sess.run(cost, feed_dict={X:x_data, Y:y_data}), sess.run(W1), sess.run(W2)
 
        correct_predict = tf.equal(tf.floor(h+0.5), Y)
 
        acc = tf.reduce_mean(tf.cast(correct_predict, "float"))
        print sess.run([h,tf.floor(h+0.5), correct_predict, acc],feed_dict={X:x_data, Y:y_data})
        print "h : ", sess.run([h],feed_dict={X:x_data, Y:y_data})
        print "Accuracy: ", acc.eval({X:x_data, Y:y_data})
