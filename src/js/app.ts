import * as express from 'express';
import * as hbs from 'hbs';
class App{
  public express;
  constructor(){
    this.express = express();
    this.defineRoutes();
    this.defineStaticFiles();
  }

  private defineRoutes(){
    const router = express.Router();
    router.get('/',(req,res)=>{
      res.json({
        message:'done'
      })
    });
    router.get('/a',(req,res)=>{
      let body:string = 'im body';
      res.render("../views/home/index.hbs",{body:body});
    });
    this.express.use('/',router);
    this.express.use('/a',router);
  }

  private defineStaticFiles(){
    this.express.use(express.static('public'));
  }
}

export default new App().express;
