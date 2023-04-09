module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                modifyVars: {
                  "primary-color": "#1890ff", // Thay đổi màu chủ đạo của Ant Design
                },
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
    ],
  },
};
