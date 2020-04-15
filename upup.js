let http = require("http");

const serverObj = () => {
  let server = http.createServer();
  server.on("request", (req, res) => {
    res.statusMessage = "true";
    res.writeHeader(200);
    let response = {state: true}
    setTimeout(() => {
      res.end(JSON.stringify(response))
    },5000)

  });

  //启动服务
  server.listen(8981, () => {
    console.log('++++++++++++++++++++++++++++++++')
    console.log("+                              +");
    console.log("+          服务启动            +");
    console.log("+                              +");
    console.log('++++++++++++++++++++++++++++++++')
  });
};
serverObj()