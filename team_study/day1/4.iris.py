from __future__ import absolute_import
from __future__ import division
from __future__ import print_function

import tensorflow as tf
import numpy as np

# Data sets
one_hot_class = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
iris_data = np.genfromtxt('iris.csv', delimiter=',')


def preprocess():
    np.random.shuffle(iris_data)
    data_size = len(iris_data)
    train_data = iris_data[:int(data_size *0.7)]
    eval_data = iris_data[int(data_size *0.7):]
    x_data= train_data[:,0:4]
    y_data = [ one_hot_class[i] for i in train_data[:,-1].astype(int) ]
    x_eval_data= eval_data[:,0:4]
    y_eval_data = [ one_hot_class[i] for i in eval_data[:,-1].astype(int) ]
    return x_data, y_data, x_eval_data, y_eval_data

x_data, y_data, x_eval_data, y_eval_data = preprocess()

x = tf.placeholder(tf.float32, [None, 4])
W = tf.Variable(tf.zeros([4, 3]))
b = tf.Variable(tf.zeros([3]))

y = tf.matmul(x,W) + b
y_ = tf.placeholder(tf.float32, [None, 3])

lr = tf.constant(0.1, 'float32')
cross_entropy = tf.reduce_mean(tf.nn.softmax_cross_entropy_with_logits(labels=y_, logits=y))
train_step = tf.train.GradientDescentOptimizer(lr).minimize(cross_entropy)


# Test trained model
correct_prediction = tf.equal(tf.argmax(y, 1), tf.argmax(y_, 1))
accuracy = tf.reduce_mean(tf.cast(correct_prediction, tf.float32))

sess = tf.Session()
sess.run(tf.global_variables_initializer())


# Train
for _ in range(200):
    for _from in xrange(0,len(x_data),30):
        _to = min(_from+30, len(x_data))
        sess.run(train_step, feed_dict={x: x_data[_from:_to], y_: y_data[_from:_to]})
    if _ % 20 == 0:
        print("error : ", sess.run(cross_entropy,feed_dict={x: x_eval_data,
                        y_: y_eval_data}),
                        ", accuracy : ", sess.run(accuracy, feed_dict={x: x_eval_data,
                        y_: y_eval_data}))


# Test trained model
print("final accuracy : ",sess.run(accuracy, feed_dict={x: x_eval_data,
                        y_: y_eval_data}))

# Test trained model
print("predict : ",sess.run(tf.equal(tf.argmax(y, 1),0), feed_dict={x: [[5.1,3.5,1.4,0.3]]}))
print("predict : ",sess.run(tf.equal(tf.argmax(y, 1),2), feed_dict={x: [[6.3,3.4,5.6,2.4]]}))
print("predict : ",sess.run(tf.equal(tf.argmax(y, 1),1), feed_dict={x: [[5.6,2.7,4.2,1.3]]}))
print("predict : ",sess.run(tf.equal(tf.argmax(y, 1),2), feed_dict={x: [[5.9,3,5.1,1.8]]}))
print("predict : ",sess.run(tf.argmax(y, 1), feed_dict={x: [[5.9,3,5.1,1.8]]}))


sess.close()
