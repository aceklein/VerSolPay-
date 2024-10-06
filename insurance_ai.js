const tf = require('@tensorflow/tfjs');

function calculatePremium(policyData) {
  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 16, inputShape: [1], activation: 'relu' }));
  model.add(tf.layers.dense({ units: 1, activation: 'linear' }));
  model.compile({ optimizer: 'adam', loss: 'meanSquaredError' });

  const xs = tf.tensor1d(policyData);
  const ys = tf.tensor1d([1, 2, 3]); // Simplified for demo

  model.fit(xs, ys).then(() => {
    console.log('AI Model Trained for insurance premiums');
  });

  return model.predict(tf.tensor2d([policyData]));
}

module.exports = { calculatePremium };