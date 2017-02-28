import tensorflow as tf

x_data = [1,2,3]
y_data = [2,4,6]

W = tf.Variable(tf.random_uniform([1],-1.0,1.0))
b = tf.Variable(tf.random_uniform([1],-1.0,1.0))

X = tf.placeholder(tf.float32)
Y = tf.placeholder(tf.float32)

h = W*X + b

cost = tf.reduce_mean(tf.square(h - Y))

a = tf.Variable(0.1)
optimizer = tf.train.GradientDescentOptimizer(a)
train = optimizer.minimize(cost)

sess = tf.Session()
sess.run(tf.global_variables_initializer())

for step in xrange(2001):
        sess.run(train,feed_dict={X:x_data,Y:y_data})
        if step % 20 == 0:
                print step, sess.run(cost,feed_dict={X:x_data,Y:y_data}), sess.run(W), sess.run(b)


print sess.run(h, feed_dict={X:5})
print sess.run(h, feed_dict={X:4})
