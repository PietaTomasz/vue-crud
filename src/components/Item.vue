<script>
const Item = {
  data() {
    var props = this.$props;
    this.__state = {
      isEdit: false
    };
    return this.__state;
  },

  render() {
    let {
      name,
      description,
      organizer,
      location,
      date,
      img
    } = this.$attrs;
    return <div class="eventBox">
        {this.$data.isEdit ? <form onSubmit={this.onEditSubmit}>
            <input placeholder="name" defaultValue={name} ref={nameInput => this.nameInput = nameInput} />
            <input placeholder="description" ref={descriptionInput => this.descriptionInput = descriptionInput} defaultValue={description} />
            <input placeholder="organizer" ref={organizerInput => this.organizerInput = organizerInput} defaultValue={organizer} />
            <input placeholder="location" ref={locationInput => this.locationInput = locationInput} defaultValue={location} />
            <input placeholder="date" defaultValue={date} ref={dateInput => this.dateInput = dateInput} />
            <input placeholder="img" defaultValue={img} ref={imgInput => this.imgInput = imgInput} /><hr />
            <Button animated="fade" basic color="teal"> Save</Button>
                </form> : <div>
          <p>{name}</p>
          <p>{description}</p>
          <p>{organizer}</p>
          <p>{location}</p>
          <p>{date}</p>
          <p><img src="{img}" alt="imgage"></img></p>
          
          <button onClick={this.onDelete}>Delete</button>
          <button onClick={this.onEdit}>Edit</button>
            </div>}
          
        </div>;
  },

  methods: {
    onDelete() {
      let {
        name
      } = this.$attrs;
      this.$emit("delete", name);
    },

    onEdit() {
      this.isEdit = true;
    },

    onEditSubmit(event) {
      event.preventDefault();
      this.$emit("editSubmit", this.nameInput.value, this.descriptionInput.value, this.organizerInput.value, this.locationInput.value, this.dateInput.value, this.imgInput.value);
      this.isEdit = false;
    }

  }
};
export default Item;
</script>