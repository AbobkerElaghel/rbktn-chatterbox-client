var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  	// attach click listener to 
  },

  render: ()=>{
  	let messages = App._messages;
  	// renders messages using template
  	// loop through messages and invoke the template
  	_.each(messages, (message)=> {
  		MessagesView.renderMessage(message);
  	});
  },

  filler: (message)=>{
  	message.username = message.username || '';
  	message.text = message.text || '';
  	return message;
  },

  renderMessage: (message) => {
  		message = MessagesView.filler(message);
    let html = MessageView.render(message);
    MessagesView.$chats.prepend(html); 	
  }
};