

module.exports = {

    name: 'less',
    target: 'min',
    config: {
        options: {
            compress: true,
        },
        files: [
            {
                expand: true,
                src: '<%=dir.css%>**/*.less',
                ext: '.min.css'
            },
            {
                expand: true,
                src: '<%=dir.refactor%>**/*.less',
                ext: '.min.css'
            },
            {
                expand: true,
                src: '<%=dir.demo%>**/*.less',
                ext: '.min.css'
            }
        ]
    }
};