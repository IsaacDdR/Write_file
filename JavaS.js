infor =  new Mongo.Collection("info");

if (Meteor.isClient){
	Template.test.helpers({

		'click .save': function (event, template){

			
			var nombre1 = template.find(".name1").value;
		}
	})
};

Meteor.methods({

	insertDatos: function(options){	

		return info.insert(options);

		Meteor.call("insertDatos",{
			nombre : nombre1
		})
	}
});
