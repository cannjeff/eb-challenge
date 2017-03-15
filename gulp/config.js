var src = './';

module.exports = {
  sass: {
    src: [
      src + 'sass/*.scss',
      src + 'sass/**/*.scss'
    ],
    dest: './css'
  }
};
