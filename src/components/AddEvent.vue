<script>
const AddEvent = {
  render() {
    return <form onSubmit={this.onSubmit}>
            <h4>Add Event</h4>
            <input placeholder="name" ref={nameInput => this.nameInput = nameInput} />
            <input placeholder="description" ref={descriptionInput => this.descriptionInput = descriptionInput} />
            <input placeholder="organizer" ref={organizerInput => this.organizerInput = organizerInput} />
            <input placeholder="location" ref={locationInput => this.locationInput = locationInput} />
            <input placeholder="date" ref={dateInput => this.dateInput = dateInput} />
            <input placeholder="img" ref={imgInput => this.imgInput = imgInput} /><hr />
            <Button> Add</Button>
        </form>;
  },

  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$emit("add", this.nameInput.value, this.descriptionInput.value, this.organizerInput.value, this.locationInput.value, this.dateInput.value, this.imgInput.value);
      this.nameInput.value = '';
      this.descriptionInput.value = '';
      this.organizerInput.value = '';
      this.locationInput.value = '';
      this.dateInput.value = '';
      this.imgInput.value = '';
    }

  }
};
export default AddEvent;
</script>