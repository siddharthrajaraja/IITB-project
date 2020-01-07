module.exports.search=(req,res)=>{
    var elasticsearch = require('elasticsearch');


var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace',
  apiVersion: '7.2', // use the same version of your Elasticsearch instance
});

client.ping({
    // ping usually has a 3000ms timeout
    requestTimeout: 1000
  }, function (error) {
    if (error) {
      console.trace('elasticsearch cluster is down!');
    } else {
      console.log('All is well');
    }
  });

  async function test(){
    const response = await client.search({
        index: 'test',
        type: 'data_set',
        body: {
          query: {
            match: {
                "login id":"rupesh"
              
            }
          }
        }
      })
    
      const response2 = await client.search({
        index: 'test',
        type: 'data_set',
        body: {
          query: {
            query_string: {
                "query": req.body.search
              
            }
          }
        }
      })
      
      var data_returned=response2.hits.hits
      console.log(typeof(data_returned))
        /*data_returned.forEach(element => {
          console.log(element)
      });*/
      res.render('ans.ejs',{data_returned})
  }
    test()
  
}