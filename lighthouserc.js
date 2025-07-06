module.exports = {
  ci: {
    collect: {
      url: ['https://mall.iopenmall.tw/iopen/'],
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        'categories:performance': ['error', {'minScore': 0.8}],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};