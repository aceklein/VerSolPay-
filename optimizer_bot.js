const tf = require('@tensorflow/tfjs');

function optimizeBotTrade(tradeData, marketCondition) {
  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 16, inputShape: [1], activation: 'relu' }));
  model.add(tf.layers.dense({ units: 1, activation: 'linear' }));
  model.compile({ optimizer: 'adam', loss: 'meanSquaredError' });

  const xs = tf.tensor1d(tradeData);
  const ys = tf.tensor1d(marketCondition);

  model.fit(xs, ys).then(() => {
    console.log('AI Model Trained for bot');
  });

  return model.predict(tf.tensor2d([tradeData]));
}

module.exports = { optimizeBotTrade };