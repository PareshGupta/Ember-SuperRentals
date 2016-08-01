import Ember from 'ember';

// let rentals = [
// 	{
// 		id: 1,
// 		title: 'Grand Old Mansion',
// 		owner: 'Veruci Mentis',
// 		city: 'Rome',
// 		type: 'Estate',
// 		bedrooms: 4,
// 		image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
// 	},
// 	{
//     id: 2,
// 		title: 'Old Red Fort',
// 		owner: 'Dr. Croc Williams ',
// 		city: 'Delhi',
// 		type: 'Fort',
// 		bedrooms: 100,
// 		image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
// 	},
// 	{
// 	  id: 3,
// 	  title: 'Downtown Charm',
// 	  owner: 'Violet Beauregarde',
// 	  city: 'Portland',
// 	  type: 'Apartment',
// 	  bedrooms: 3,
// 	  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
// 	}
// ];

export default Ember.Route.extend({
	model() {
		return this.get('store').findAll('rental');
	}
});
