const middlesware = (app, Express, cors) =>{
    app.use(Express.json());

    app.use((request, response, next) => {
        next();
    })

    const options = {
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    };
    
    app.use(cors(options));
};

export default middlesware;