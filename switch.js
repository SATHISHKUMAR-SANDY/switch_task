Task 1: Calculate Discounts Based on Membership Level

let level_Type = String(prompt("ENTER YOUR LEVEL").toLowerCase());

switch (true){
    case (level_Type=="bronze"):
        console.log(`Your Level is ${level_Type} => so you got 30%`);
        break;
    case  (level_Type=="silver"):
        console.log(`Your Level is ${level_Type} => so you got 40%`);
        break;
    case (level_Type=="gold"):
        console.log(`Your Level is ${level_Type} => so you got 50%`);
        break;
    case (level_Type=="platinum"):
        console.log(`Your Level is ${level_Type} => so you got 80%`);
        break;
    default:
        console.log("INVALID OUTPUT");
}

Task 2: Determine the Season Based on the Month



let month_checker = Number(prompt("ENTER YOUR NUMBER"));

switch(true){
    case (month_checker==1):
        console.log("MONTH IS JANUARY WEATHER IS WINTER");
    break;  
    case (month_checker==2):
        console.log("MONTH IS FEBURY WEATHER IS SPRING");
    break;   
    case (month_checker==3):
        console.log("MONTH IS MARCH WEATHER IS SUMMER");
    break;   
    case (month_checker==4):
        console.log("MONTH IS MARCH WEATHER IS Autum");
    break;   
    case (month_checker==5):
        console.log("MONTH IS APRIL WEATHER IS WINTER ");
    break;   
    case (month_checker==6):
        console.log("MONTH IS MAY WEATHER IS SUMMER");
    break;   
    case (month_checker==7):
        console.log("MONTH IS JUN WEATHER IS AUTUMN");
    break;   
    case (month_checker==8):
        console.log("MONTH IS JULLY WEATHER IS WINTER");
    break;   
    case (month_checker==9):
        console.log("MONTH IS AUGEST WEATHER IS SPRING ");
    break;   
    case (month_checker==10):
        console.log("MONTH IS SEPTEMBER WEATHER IS SUMMER");
    break;   
    case (month_checker==11):
        console.log("MONTH IS OCTOBER WEATHER IS WINTER");
    break;   
    case (month_checker==12):
        console.log("MONTH IS DECEMBER WEATHER IS WINTER");
    break;  
    default:
        console.log("INVAILD INPUT");      
}

Task 3: Determine Type of Vehicle Based on Number of Wheels

let vehicle_type_check = String(prompt("ENTER YOU VEHICLE NAME").toLowerCase());

switch(true){
    case( vehicle_type_check=="bicycle"):
    case( vehicle_type_check=="motorcycle"):
    console.log(`VEHICAL NAME IS ${vehicle_type_check}=>ITS HAVE 2 WHEELS`);
    break;
    case( vehicle_type_check=="auto"):
    console.log(`VEHICAL NAME IS ${vehicle_type_check}=>ITS HAVE 3 WHEELS`);
    break;
    case( vehicle_type_check=="car"):
    console.log(`VEHICAL NAME IS ${vehicle_type_check}=>ITS HAVE 4 WHEELS`);
    break;
    case( vehicle_type_check=="Truck"):
    console.log(`VEHICAL NAME IS ${vehicle_type_check}=>ITS HAVE 10 WHEELS`);
    break;
    default:
        console.log("INVALID INPUT");
}


Task 4: Menu Selection in a Restaurant



let menu_Checker = String(prompt("ENTER YOUR FOOD TYPE (VEG/NON-VEG)").toLowerCase());

switch(true){
 case(menu_Checker=="veg"):
 console.log(`${menu_Checker}items:1.IDLY,2.DOSA,3.PUURI,4.ONION DOSA`);
 break;
 case(menu_Checker=="nonveg"):
 console.log(`${menu_Checker}items:1.CHICKEN_FRY,2.PEPPER_CHICKEN,3.MUTTON_BIRIYANI,4.CHICKEN_BIRIYANI`);
 break;
default:
    console.log("INVALID INPUT");
}

Task 5: Day of the Week Planner


let activity_Checker = String(prompt("ENTER YOUR DAY").toLowerCase());



switch(true){
    case(activity_Checker=="sunday"):
    console.log(`${activity_Checker}=>LEARN HTML`);
    break;
    case(activity_Checker=="monday"):
    console.log(`${activity_Checker}=>"LEARN CSS`);
    break;
    case(activity_Checker=="tuseday"):
    console.log(`${activity_Checker}=>`);
    break;
    case(activity_Checker=="wednesday"):
    console.log(`${activity_Checker}=>"LEARN JAVASCRIPT`);
    break;
    case(activity_Checker=="thursday"):
    console.log(`${activity_Checker}=>LEARN REACT JS`);
    break;
    case(activity_Checker=="friday"):
    console.log(`${activity_Checker}=>LEARN PYTHON`);
    break;
    case(activity_Checker=="saturday"):
    console.log(`${activity_Checker}=>LEARN SQL`);
    break;
    default:
        console.log("INVALID OUTPUT");
}