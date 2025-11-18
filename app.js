const WAD = require("../WAD_Assign1/AidanLee_WAD_Assignment1.js");
// hotels
WAD.add_hotel("VivoCity", "Singapore", 4);
WAD.add_hotel("Suntec City", "Singapore", 4.5);
WAD.add_hotel("Park Royal", "Singapore", 5);
WAD.add_hotel("VivoCity", "Singapore", 5);

// rooms
WAD.rooms("VivoCity", 100, "Normal", "Single", 1, "occupied");
WAD.rooms("VivoCity", 101, "Suite", "King", 1, "dirty");

// hire employee
WAD.hire_employees("VivoCity", "Alice", "E001", "cleaner", 2500);
WAD.hire_employees("VivoCity", "Johnny", "E002", "HR admin", 3000);
WAD.hire_employees("VivoCity", "Johnny", "E002", "Head chef", 2300);

// send repairman when room has problem
WAD.send_repairMan(
    "Jimmy Jim Bob", 
    "RM101", 
    "VivoCity", 
    "2025-11-12", 
    "10:00", 
    "2025-11-12", 
    "12:00"
);

console.log("Rooms array:");
console.log(WAD.get_rooms("VivoCity"));

// send cleaner to room
WAD.send_cleaner("VivoCity", 101, "E001");
WAD.send_cleaner("VivoCity", 101, "E002");

console.log(WAD.get_employees("random name"));

console.log("Employees array:");
console.log(WAD.get_employees("VivoCity"));
console.log("Rooms array:");
console.log(WAD.get_rooms("VivoCity"));