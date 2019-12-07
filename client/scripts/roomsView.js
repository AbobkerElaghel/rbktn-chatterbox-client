var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // attacth liseaners to both button and select
  },

  render: function() {
  	let messages = App._messages;
  	console.log(messages);

  	let rooms = _.uniq(_.map(messages, (message)=>{
  				return message.roomname;
  				})).forEach( room => RoomsView.$select.append(`<option>${room}</option>`) );
  	// let rooms = _.map(messages, (message)=> message.roomname).uniq();
  	console.log(rooms);
  	//render the list options
  	
  },

  renderRoom: ()=>{

  }

};
