// const calculate = () => {
//   // Define a model for linear regression.
//   const model = tf.sequential();
//   model.add(tf.layers.dense({units: 1, inputShape: [1] }));

// // Inspect the inferred shape of the model's output.
//   console.log(JSON.stringify(model.outputs[0].shape));

//   // Prepare the model for training: Specify the loss and the optimizer.
//   model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

//   // Generate some synthetic data for training.
//   const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
//   const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

//   // Train the model using the data.
//   model.fit(xs, ys).then(() => {
//     // Use the model to do inference on a data point the model hasn't seen before:
//     (model.predict(tf.tensor2d([5], [1, 1])) as tf.Tensor).print();
//   });
// };

// export {calculate as default};