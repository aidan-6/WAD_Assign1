module.exports = {
    // NOTE, when the functions with comments have F followed by number, 
    // its based on number of different functions
    // e.g. F1 = function 1

    hotels: [],
    repairMan_timetable: [],
    assign_cleaner: [],

    // add hotel (F1)
    add_hotel(hotel_name, hotel_location, hotel_rating) {
        if(this.get_hotel_by_name(hotel_name)){
            return console.log("Do not duplicate the hotel name!");
        } else {
            this.hotels.push({
                name: hotel_name,
                location: hotel_location,
                rating: hotel_rating,
                rooms: [],
                employees: []
            });
            return console.log("Hotel added!");
        }
    },

    // A helper for adding rooms and employees (doesnt count, its a helper)
    get_hotel_by_name(hotel_name) {
        return this.hotels.find(hotel => hotel.name === hotel_name);
    },

    // add rooms (F2)
    rooms(hotel_name, room_id, room_type, bed_type, numOf_beds, room_status) {
        const hotel = this.get_hotel_by_name(hotel_name); // gets hotel name
        if (!hotel){ 
            return console.log("Hotel not found!");
        }

        if(room_id == "" || room_type == "" || bed_type == "" || numOf_beds== "" ){
            return console.log("Do not leave any blanks when adding rooms (except status)");
        } else{
            hotel.rooms.push({
                room_id,
                room_type,
                bed_type,
                numOf_beds,
                room_status
            });
            return console.log("Room " + room_id + " added!");
        }
    },

    // Add employees (F2)
    hire_employees(hotel_name, employee_name, employee_id, job_type, salary) {
        const hotel = this.get_hotel_by_name(hotel_name);
        const dup_employee = hotel.employees.find(emp => emp.employee_id === employee_id);

        if (!hotel) {
            return console.log("Hotel not found!");
        } 
        
        if (dup_employee){
            return console.log("Do not hire the same person with the same ID twice!");
        }
        else {
            hotel.employees.push({
                employee_name,
                employee_id,
                job_type,
                salary
            });
            return console.log(employee_name + " has been hired!");
        }
    },

    // get employees based on hotel name (F5)
    get_employees(hotel_name){
        const selected_name = this.get_hotel_by_name(hotel_name);
        if(!selected_name){
            return console.log("No such hotel with that name");
        } else {
            return selected_name.employees;
        }
    },

    // get rooms based on hotel name (F5)
    get_rooms(hotel_name){
        const selected_name = this.get_hotel_by_name(hotel_name);
        if(!selected_name){
            return console.log("No such hotel with that name");
        } else {
            return selected_name.rooms;
        }
    },

    // send repairman (F3)
    send_repairMan(guy_name, guy_serial_num, hotel_name, startDate, startTime, endDate, endTime) {
        const hotel = this.get_hotel_by_name(hotel_name);
        if (!hotel){ 
            return console.log("Hotel not found!");
        } else {
                this.repairMan_timetable.push({
                name: guy_name,
                serial_num: guy_serial_num,
                assigned_hotel: hotel.name,
                start: { date: startDate, time: startTime },
                end: { date: endDate, time: endTime }
            });
        }
    },

    // assign cleaner to hotel (F4)
    send_cleaner(hotel_name, room_id, employee_id) {
        const hotel = this.get_hotel_by_name(hotel_name);
        if (!hotel) {
            return console.log("Hotel not found!");
        }

        // check if room or cleaner is in array
        const room = hotel.rooms.find(r => r.room_id === room_id);
        const cleaner = hotel.employees.find(e => e.employee_id === employee_id);

        // when room and cleaner is empty / null
        if (!room || !cleaner){ 
            return console.log("Room or cleaner not found!");
        }

        if (cleaner.job_type === "cleaner" && room.room_status === "dirty") {
            this.assign_cleaner.push({
                cleaner_name: cleaner.employee_name,
                cleaner_id: cleaner.employee_id,
                room_id: room.room_id,
                hotel_name: hotel.name
            });
            room.room_status = "cleaning";
            return console.log("Room " + room.room_id + "'s status has been updated to cleaning");
        } else {
            return console.log("job type needs to be cleaner / room status has to be dirty");
        }
    }
}