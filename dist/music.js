const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: '山海',
        artist: '华晨宇',
        url: 'http://www.ytmp3.cn/down/53961.mp3',
        cover: 'http://img.ytmp3.cn/image/53.jpg',
      },
      {
        name: 'Lean On',
        artist: 'Major Lazer',
        url: 'http://www.ytmp3.cn/down/58393.mp3',
        cover: 'http://img.ytmp3.cn/image/51.jpg',
      },
      {
        name: 'Ghosts',
        artist: 'Shinigami',
        url: 'http://www.ytmp3.cn/down/44596.mp3',
        cover: 'http://img.ytmp3.cn/image/10.jpg',
      },
      {
        name: 'HUMBLE',
        artist: 'Kendrick Lamar',
        url: 'http://www.ytmp3.cn/down/38411.mp3',
        cover: 'http://img.ytmp3.cn/image/3.jpg',
      }
    ]
});