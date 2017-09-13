import app from './app';

const port = process.env.PORT || 3000

app.listen(port,(error)=>{
  if(error){
    console.log(error);
  }
  return console.log(`listening to port - ${port}`);
})
