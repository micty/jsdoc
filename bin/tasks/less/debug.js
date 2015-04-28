

module.exports = {

    name: 'less',
    target: 'debug',
    config: {
        options: {
            compress: false,
        },
      

        files: [
            { 
                expand: true,
                src: '<%=dir.css%>**/*.less',
                ext: '.debug.css'
            },
            {
                expand: true,
                src: '<%=dir.refactor%>**/*.less',
                ext: '.debug.css'
            },
            {
                expand: true,
                src: '<%=dir.demo%>**/*.less',
                ext: '.debug.css'
            }
        ]
    }
};