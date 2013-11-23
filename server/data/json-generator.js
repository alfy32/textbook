[
    '{{repeat(100, 200)}}',
    {
        isbn: '{{numeric(0,999999999, 000000000)}}',
        image: 'http://placekitten.com/80/80',
        title: '{{lorem(2, words)}}',
        author: '{{firstName}} {{surname}}',
        price: '{{numeric(20.01,100.01)}}',
        publisher: '{{company}}',
        edition: '{{numeric(1,20)}}'
    }
]