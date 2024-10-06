const tf = require('@tensorflow/tfjs');

function optimizeYield(liquidityData, priceFeed) {
  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 32, inputShape: [1], activation: 'relu' }));
  model.add(tf.layers.dense({ units: 1, activation: 'linear' }));
  model.compile({ optimizer: 'adam', loss: 'meanSquaredError' });

  const xs = tf.tensor1d(liquidityData);
  const ys = tf.tensor1d(priceFeed);

  model.fit(xs, ys).then(() => {
    console.log('AI Model Trained');
  });

  return model.predict(tf.tensor2d([liquidityData]));
}

module.exports = { optimizeYield };