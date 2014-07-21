exports.getIndex = function (req, res) {

  return req.db.collection(req.collection).aggregate(
      [
        {$match:{}},
        {$group: {_id:"$applicationName", total: {$sum: 1}}},
        { $sort : { _id:1 } }
      ],
      function(err, result){
        res.json({
          assigned: result
        });
      }
    );
};
exports.getResolved = function(req, res){

  return req.db.collection(req.collection).aggregate(
      [
        {$match:{ticketStatus:{$in:["PROCESSED","ARCHIVED"]}}},
        {$group: {_id:"$applicationName", total: {$sum: 1}}},
        {$sort: {_id:1}}
      ],
      function(err, result){
        console.log(result);
        res.json(result);
      }
    );
};

exports.getAssigned = function(req, res){

  return req.db.collection(req.collection).aggregate(
      [
        {$match:{}},
        {$group: {_id:"$applicationName", total: {$sum: 1}}}
      ],
      function(err, result){
        console.log(result);
        res.json(result);
      }
    );
};