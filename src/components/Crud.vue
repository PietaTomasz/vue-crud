<template>
  <div id="crud">
  </div>
</template>

<script>/* eslint-disable */
import '../App.css';
import Item from './Item';
import AddEvent from './AddEvent';

let events = [{
  name: 'CSS/JS Workshops',
  description: 'Free Workshops for FrontEnd Developers',
  organizer: 'SkyGate',
  location: 'Gliwice',
  date: '18.05.2018',
  img: ''
}, {
  name: 'React Workshops',
  description: 'Free Workshops for FrontEnd Developers',
  organizer: 'SkyGate',
  location: 'Gliwice',
  date: '13.06.2018',
  img: ''
}];
localStorage.setItem('events', JSON.stringify(events));
const Crud = {
  data() {
    var props = this.$props;
    this.__state = {
      events: JSON.parse(localStorage.getItem('events')),
      title: 'React Event Organizer'
    };
    return this.__state;
  },

  beforeMount() {
    let events = this.addEvent();
    this.events = events;
  },

  render() {
    return <div>
      <h1>Events Manager</h1>
      <AddEvent onAdd={this.onAdd} />
      {this.$data.events.map(event => {
        return <Item key={event.name} {...event} onDelete={this.onDelete} onEditSubmit={this.onEditSubmit} />;
      })}
      </div>;
  },

  methods: {
    addEvent() {
      return this.$data.events;
    },

    onAdd(name, description, organizer, location, date, img) {
      let events = this.addEvent();
      events.push({
        name,
        description,
        organizer,
        location,
        date,
        img
      });
      this.events = events;
    },

    onDelete(name) {
      let events = this.addEvent();
      let filtered = events.filter(event => {
        return event.name !== name;
      });
      console.log(filtered);
      this.events = filtered;
    },

    onEditSubmit(name, description, organizer, location, date, img) {
      let events = this.addEvent();
      events = events.map(event => {
        if (event.name === name) {
          event.name = name;
          event.description = description;
          event.organizer = organizer;
          event.location = location;
          event.date = date;
          event.img = img;
        }

        return event;
      });
      this.events = events;
    }

  }
};
export default Crud;
</script>

