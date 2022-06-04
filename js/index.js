
initBattery()

function initBattery(){
  const batteryLiquid = document.querySelector('.battery-liquid'),
        batteryStatus = document.querySelector('.battery-status'),
        batteryParcentage = document.querySelector('.battery-parcentage')
 
        navigator.getBattery().then((batt) => {
          updateBattery = () => {
            let level = Math.floor(batt.level * 100)
            batteryParcentage.innerHTML = level + '%'
            batteryLiquid.style.height = `${parseInt(batt.level * 100)}%`
           
            if(level === 100){
           batteryStatus.innerHTML = `Full battery <i class="ri-battery-2-fill green-color"></i>`;
           batteryLiquid.style.height = `103%`
           }
           else if(level <= 20 &! batt.charging){
            batteryStatus.innerHTML = `Low battery <i class="ri-plug-line animated-red"></i>`
           }
           else if(batt.charging)
           {
           batteryStatus.innerHTML = `Charging... <i class="ri-flashlight-line animated-green"></i>`
           } else{
             batteryStatus.innerHTML = '';
           }

          if(level <= 20){
            batteryLiquid.classList.add('gradient-color-red');
            batteryLiquid.classList.remove('gradient-color-orange','gradient-color-yellow','gradient-color-green');
          }else if(level <= 40){
            batteryLiquid.classList.add('gradient-color-orange');
            batteryLiquid.classList.remove('gradient-color-red','gradient-color-yellow','gradient-color-green');
          }else if(level <= 90){
            batteryLiquid.classList.add('gradient-color-yellow');
            batteryLiquid.classList.remove('gradient-color-red','gradient-color-orange','gradient-color-green');
          }else{
            batteryLiquid.classList.add('gradient-color-green');
            batteryLiquid.classList.remove('gradient-color-orange','gradient-color-yellow','graidient-color-red');
          }
          
          }

          updateBattery()

          batt.addEventListener('chargingchange',()=>{updateBattery()})
          batt.addEventListener('levelchange',()=>{updateBattery()})
        })

      }