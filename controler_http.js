
const path = require('path');
const moment = require('moment');
const {Pool} = require('pg')
const { off } = require('process');
const { start } = require('repl');
require('dotenv').config()
require('fs');
const dbase_rest= new Pool({
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_PERTANIAN
})
dbase_rest.connect();
module.exports = {
   // Respond request to give latest 100 data
    
// async getDataTopic1(req, res) {
//     const data = await dbase_rest.query(`SELECT timestamp, Ph, TDS, Suhu_Air, WindDirection, Kecepatan_Angin, Infrared1, Infrared2, Infrared3, Berat1 FROM topic1 ORDER BY timestamp DESC LIMIT 100`);
  
//     if (data.rowCount > 0) {
//         const combinedArray = data.rows.map(row => {
//             const { timestamp, ...rest } = row;
//             return {
//                 timestamp: moment(timestamp).format("DD-MM-YY HH:mm:ss"),
//                 ...rest,
//             };
//         });
  
//         res.status(200);
//         res.send({
//             count: data.rowCount,
//             result: combinedArray,
//         });
  
//         console.log("[REST-API] GET DATA TOPIC 1");
//     } else {
//         res.status(404).send("No data found");
//     }
//     },
// async getDataTopic2(req, res) {
//            const data = await dbase_rest.query(`SELECT timestamp, Waterflow1, Waterflow2, Waterflow3, Waterflow4, SoilMoisture1, SoilMoisture2, SoilMoisture3, SoilMoisture4 FROM topic2 ORDER BY timestamp DESC LIMIT 100`);
            
//            if (data.rowCount > 0) {
//             const combinedArray = data.rows.map(row => {
//                 const { timestamp, ...rest } = row;
//                 return {
//                     timestamp: moment(timestamp).format("DD-MM-YY HH:mm:ss"),
//                     ...rest,
//                 };
//             });
      
//             res.status(200);
//             res.send({
//                 count: data.rowCount,
//                 result: combinedArray,
//             });
      
//             console.log("[REST-API] GET DATA TOPIC 2");
//         } else {
//             res.status(404).send("No data found");
//         }
//     },
// async getDataTopic3(req, res) {
//            const data = await dbase_rest.query(`SELECT timestamp, Berat2, Berat3, Berat4, Suhu, Tekanan_Udara, PompaNutrisi, PompaAir, LampuUv, pyrano, Humidity FROM topic3 ORDER BY timestamp DESC LIMIT 100`);
            
//             if (data.rowCount > 0) {
//               const combinedArray = data.rows.map(row => {
//                   const { timestamp, ...rest } = row;
//                   return {
//                       timestamp: moment(timestamp).format("DD-MM-YY HH:mm:ss"),
//                       ...rest,
//                   };
//               });
        
//               res.status(200);
//               res.send({
//                   count: data.rowCount,
//                   result: combinedArray,
//               });
        
//               console.log("[REST-API] GET DATA TOPIC 3");
//           } else {
//               res.status(404).send("No data found");
//           }
//     },
// async TableDataTopic1(req, res) {
//       const data = await dbase_rest.query(`SELECT timestamp, Ph, TDS, Suhu_Air, WindDirection, Kecepatan_Angin, Infrared1, Infrared2, Infrared3, Berat1 FROM topic1 ORDER BY timestamp DESC LIMIT 100`);
    
//       if (data.rowCount > 0) {
//           const combinedArray = data.rows.map(row => {
//               const { timestamp, ...rest } = row;
//               return {
//                   timestamp: moment(timestamp).format("DD-MM-YY HH:mm:ss"),
//                   ...rest,
//               };
//           });
    
//           res.status(200);
//           res.send({
//               count: data.rowCount,
//               result: combinedArray,
//           });
    
//           console.log("[REST-API] GET DATA TOPIC 1");
//       } else {
//           res.status(404).send("No data found");
//       }
//       },
// async TableDataTopic2(req, res) {
//              const data = await dbase_rest.query(`SELECT timestamp, Waterflow1, Waterflow2, Waterflow3, Waterflow4, SoilMoisture1, SoilMoisture2, SoilMoisture3, SoilMoisture4 FROM topic2 ORDER BY timestamp DESC LIMIT 100`);
              
//              if (data.rowCount > 0) {
//               const combinedArray = data.rows.map(row => {
//                   const { timestamp, ...rest } = row;
//                   return {
//                       timestamp: moment(timestamp).format("DD-MM-YY HH:mm:ss"),
//                       ...rest,
//                   };
//               });
        
//               res.status(200);
//               res.send({
//                   count: data.rowCount,
//                   result: combinedArray,
//               });
        
//               console.log("[REST-API] GET DATA TOPIC 2");
//           } else {
//               res.status(404).send("No data found");
//           }
//       },
// async TableDataTopic3(req, res) {
//              const data = await dbase_rest.query(`SELECT timestamp, Berat2, Berat3, Berat4, Suhu, Tekanan_Udara, PompaNutrisi, PompaAir, LampuUv, pyrano, Humidity FROM topic3 ORDER BY timestamp DESC LIMIT 100`);
              
//               if (data.rowCount > 0) {
//                 const combinedArray = data.rows.map(row => {
//                     const { timestamp, ...rest } = row;
//                     return {
//                         timestamp: moment(timestamp).format("DD-MM-YY HH:mm:ss"),
//                         ...rest,
//                     };
//                 });
          
//                 res.status(200);
//                 res.send({
//                     count: data.rowCount,
//                     result: combinedArray,
//                 });
          
//                 console.log("[REST-API] GET DATA TOPIC 3");
//             } else {
//                 res.status(404).send("No data found");
//             }
//       },
// async getDataForOneDayTopic1(req, res) {
//         // Mendapatkan tanggal saat ini
//         const currentDate = moment().format('YYYY-MM-DD');
    
//         try {
//             const data = await dbase_rest.query(`
//                 SELECT timestamp, Ph, TDS, Suhu_Air, WindDirection, Kecepatan_Angin, Infrared1, Infrared2, Infrared3, Berat1
//                 FROM topic1 
//                 WHERE timestamp::date = $1 
//                 ORDER BY timestamp DESC
//             `, [currentDate]);
    
//             if (data.rowCount > 0) {
//                 const combinedArray = data.rows.map(row => {
//                     const { timestamp, ...rest } = row;
//                     return {
//                         timestamp: moment(timestamp).format("DD-MM-YY HH:mm:ss"),
//                         ...rest,
//                     };
//                 });
    
//                 res.status(200).json({
//                     count: data.rowCount,
//                     result: combinedArray,
//                 });
    
//                 console.log(`[REST-API] GET DATA TOPIC 1 for ${currentDate}`);
//             } else {
//                 res.status(404).json({ message: "No data found for today" });
//             }
//         } catch (error) {
//             console.error(error);
//             res.status(500).json({ message: 'Internal Server Error' });
//         }
//     },
// async getDataForOneDayTopic2(req, res) {
//       // Mendapatkan tanggal saat ini
//       const currentDate = moment().format('YYYY-MM-DD');
  
//       try {
//           const data = await dbase_rest.query(`
//               SELECT timestamp, Waterflow1, Waterflow2, Waterflow3, Waterflow4, SoilMoisture1, SoilMoisture2, SoilMoisture3, SoilMoisture4 
//               FROM topic2
//               WHERE timestamp::date = $1 
//               ORDER BY timestamp DESC
//           `, [currentDate]);
  
//           if (data.rowCount > 0) {
//               const combinedArray = data.rows.map(row => {
//                   const { timestamp, ...rest } = row;
//                   return {
//                       timestamp: moment(timestamp).format("DD-MM-YY HH:mm:ss"),
//                       ...rest,
//                   };
//               });
  
//               res.status(200).json({
//                   count: data.rowCount,
//                   result: combinedArray,
//               });
  
//               console.log(`[REST-API] GET DATA TOPIC 2 for ${currentDate}`);
//           } else {
//               res.status(404).json({ message: "No data found for today" });
//           }
//       } catch (error) {
//           console.error(error);
//           res.status(500).json({ message: 'Internal Server Error' });
//       }
//   },
// async getDataForOneDayTopic3(req, res) {
//     // Mendapatkan tanggal saat ini
//     const currentDate = moment().format('YYYY-MM-DD');

//     try {
//         const data = await dbase_rest.query(`
//             SELECT timestamp, Berat2, Berat3, Berat4, Suhu, Tekanan_Udara, PompaNutrisi, PompaAir, LampuUv, pyrano, Humidity
//             FROM topic3
//             WHERE timestamp::date = $1 
//             ORDER BY timestamp DESC
//         `, [currentDate]);

//         if (data.rowCount > 0) {
//             const combinedArray = data.rows.map(row => {
//                 const { timestamp, ...rest } = row;
//                 return {
//                     timestamp: moment(timestamp).format("DD-MM-YY HH:mm:ss"),
//                     ...rest,
//                 };
//             });

//             res.status(200).json({
//                 count: data.rowCount,
//                 result: combinedArray,
//             });

//             console.log(`[REST-API] GET DATA TOPIC 3 for ${currentDate}`);
//         } else {
//             res.status(404).json({ message: "No data found for today" });
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// }, 
// async getDataForSevenDaysTopic1(req, res) {
//   try {
//       // Mendapatkan tanggal saat ini
//       const currentDate = moment().format('YYYY-MM-DD');
      
//       // Menghitung tanggal 7 hari yang lalu
//       const sevenDaysAgo = moment().subtract(7, 'days').format('YYYY-MM-DD');

//       const data = await dbase_rest.query(`
//           SELECT timestamp, Ph, TDS, Suhu_Air, WindDirection, Kecepatan_Angin, Infrared1, Infrared2, Infrared3, Berat1
//           FROM topic1 
//           WHERE timestamp::date BETWEEN $1 AND $2
//           ORDER BY timestamp DESC
//       `, [sevenDaysAgo, currentDate]);

//       if (data.rowCount > 0) {
//           const combinedArray = data.rows.map(row => {
//               const { timestamp, ...rest } = row;
//               return {
//                   timestamp: moment(timestamp).format("DD-MM-YY HH:mm:ss"),
//                   ...rest,
//               };
//           });

//           res.status(200).json({
//               count: data.rowCount,
//               result: combinedArray,
//           });

//           console.log(`[REST-API] GET DATA TOPIC 1 for the last 7 days`);
//       } else {
//           res.status(404).json({ message: "No data found for the last 7 days" });
//       }
//   } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal Server Error' });
//   }
// },
// async getDataForSevenDaysTopic2(req, res) {
//   try {
//       // Mendapatkan tanggal saat ini
//       const currentDate = moment().format('YYYY-MM-DD');
      
//       // Menghitung tanggal 7 hari yang lalu
//       const sevenDaysAgo = moment().subtract(7, 'days').format('YYYY-MM-DD');

//       const data = await dbase_rest.query(`
//           SELECT timestamp, Waterflow1, Waterflow2, Waterflow3, Waterflow4, SoilMoisture1, SoilMoisture2, SoilMoisture3, SoilMoisture4 
//           FROM topic2
//           WHERE timestamp::date BETWEEN $1 AND $2
//           ORDER BY timestamp DESC
//       `, [sevenDaysAgo, currentDate]);

//       if (data.rowCount > 0) {
//           const combinedArray = data.rows.map(row => {
//               const { timestamp, ...rest } = row;
//               return {
//                   timestamp: moment(timestamp).format("DD-MM-YY HH:mm:ss"),
//                   ...rest,
//               };
//           });

//           res.status(200).json({
//               count: data.rowCount,
//               result: combinedArray,
//           });

//           console.log(`[REST-API] GET DATA TOPIC 2 for the last 7 days`);
//       } else {
//           res.status(404).json({ message: "No data found for the last 7 days" });
//       }
//   } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal Server Error' });
//   }
// },
// async getDataForSevenDaysTopic3(req, res) {
//   try {
//       // Mendapatkan tanggal saat ini
//       const currentDate = moment().format('YYYY-MM-DD');
      
//       // Menghitung tanggal 7 hari yang lalu
//       const sevenDaysAgo = moment().subtract(7, 'days').format('YYYY-MM-DD');

//       const data = await dbase_rest.query(`
//           SELECT timestamp, Berat2, Berat3, Berat4, Suhu, Tekanan_Udara, PompaNutrisi, PompaAir, LampuUv, pyrano, Humidity 
//           FROM topic3 
//           WHERE timestamp::date BETWEEN $1 AND $2
//           ORDER BY timestamp DESC
//       `, [sevenDaysAgo, currentDate]);

//       if (data.rowCount > 0) {
//           const combinedArray = data.rows.map(row => {
//               const { timestamp, ...rest } = row;
//               return {
//                   timestamp: moment(timestamp).format("DD-MM-YY HH:mm:ss"),
//                   ...rest,
//               };
//           });

//           res.status(200).json({
//               count: data.rowCount,
//               result: combinedArray,
//           });

//           console.log(`[REST-API] GET DATA TOPIC 3 for the last 7 days`);
//       } else {
//           res.status(404).json({ message: "No data found for the last 7 days" });
//       }
//   } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal Server Error' });
//   }
// },
// async getDataForonemonthTopic1(req, res) {
//   try {
//       // Mendapatkan tanggal saat ini
//       const currentDate = moment().format('YYYY-MM-DD');
      
//       // Menghitung tanggal 7 hari yang lalu
//       const onemonthago = moment().subtract(30, 'days').format('YYYY-MM-DD');

//       const data = await dbase_rest.query(`
//           SELECT timestamp, Ph, TDS, Suhu_Air, WindDirection, Kecepatan_Angin, Infrared1, Infrared2, Infrared3, Berat1
//           FROM topic1 
//           WHERE timestamp::date BETWEEN $1 AND $2
//           ORDER BY timestamp DESC
//       `, [onemonthago, currentDate]);

//       if (data.rowCount > 0) {
//           const combinedArray = data.rows.map(row => {
//               const { timestamp, ...rest } = row;
//               return {
//                   timestamp: moment(timestamp).format("DD-MM-YY HH:mm:ss"),
//                   ...rest,
//               };
//           });

//           res.status(200).json({
//               count: data.rowCount,
//               result: combinedArray,
//           });

//           console.log(`[REST-API] GET DATA TOPIC 1 for the last 30 days`);
//       } else {
//           res.status(404).json({ message: "No data found for the last 7 days" });
//       }
//   } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal Server Error' });
//   }
// },
// async getDataForonemonthTopic2(req, res) {
//   try {
//       // Mendapatkan tanggal saat ini
//       const currentDate = moment().format('YYYY-MM-DD');
      
//       // Menghitung tanggal 30 hari yang lalu
//       const onemonthago = moment().subtract(30, 'days').format('YYYY-MM-DD');

//       const data = await dbase_rest.query(`
//           SELECT timestamp, Waterflow1, Waterflow2, Waterflow3, Waterflow4, SoilMoisture1, SoilMoisture2, SoilMoisture3, SoilMoisture4
//           FROM topic2
//           WHERE timestamp::date BETWEEN $1 AND $2
//           ORDER BY timestamp DESC
//       `, [onemonthago, currentDate]);

//       if (data.rowCount > 0) {
//           const combinedArray = data.rows.map(row => {
//               const { timestamp, ...rest } = row;
//               return {
//                   timestamp: moment(timestamp).format("DD-MM-YY HH:mm:ss"),
//                   ...rest,
//               };
//           });

//           res.status(200).json({
//               count: data.rowCount,
//               result: combinedArray,
//           });

//           console.log(`[REST-API] GET DATA TOPIC 2 for the last 30 days`);
//       } else {
//           res.status(404).json({ message: "No data found for the last 30 days" });
//       }
//   } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal Server Error' });
//   }
// },
// async getDataForonemonthTopic3(req, res) {
//   try {
//       // Mendapatkan tanggal saat ini
//       const currentDate = moment().format('YYYY-MM-DD');
      
//       // Menghitung tanggal 7 hari yang lalu
//       const onemonthago = moment().subtract(30, 'days').format('YYYY-MM-DD');

//       const data = await dbase_rest.query(`
//           SELECT timestamp, Berat2, Berat3, Berat4, Suhu, Tekanan_Udara, PompaNutrisi, PompaAir, LampuUv, pyrano, Humidity 
//           FROM topic3
//           WHERE timestamp::date BETWEEN $1 AND $2
//           ORDER BY timestamp DESC
//       `, [onemonthago, currentDate]);

//       if (data.rowCount > 0) {
//           const combinedArray = data.rows.map(row => {
//               const { timestamp, ...rest } = row;
//               return {
//                   timestamp: moment(timestamp).format("DD-MM-YY HH:mm:ss"),
//                   ...rest,
//               };
//           });

//           res.status(200).json({
//               count: data.rowCount,
//               result: combinedArray,
//           });

//           console.log(`[REST-API] GET DATA TOPIC 3 for the last 30 days`);
//       } else {
//           res.status(404).json({ message: "No data found for the last 30 days" });
//       }
//   } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal Server Error' });
//   }
// },

// get all data at one topic
// async get100data(req, res) {
//     const data = await dbase_rest.query(`SELECT timestamp, Ph, TDS, Suhu_Air, WindDirection, Kecepatan_Angin, Infrared1, Infrared2, Infrared3, Berat1,  Waterflow1, Waterflow2, Waterflow3, Waterflow4, SoilMoisture1, SoilMoisture2, SoilMoisture3, SoilMoisture4, Berat2, Berat3, Berat4, Suhu, Tekanan_Udara, PompaNutrisi, PompaAir, LampuUv, pyrano, Humidity, SVP, AVP, VPD FROM ICSFP ORDER BY timestamp DESC LIMIT 100`);
  
//     if (data.rowCount > 0) {
//         const combinedArray = data.rows.map(row => {
//             const { timestamp, ...rest } = row;
//             return {
//                 timestamp: moment(timestamp).format("DD-MM-YY HH:mm:ss"),
//                 ...rest,
//             };
//         });
  
//         res.status(200);
//         res.send({
//             count: data.rowCount,
//             result: combinedArray,
//         });
  
//         console.log("[REST-API] GET DATA");
//     } else {
//         res.status(404).send("No data found");
//     }
//     },

async get100data(req, res) {
    try {
        const query = `
            SELECT DISTINCT
                date_trunc('minute', timestamp) - ((date_part('minute', timestamp)::int % 5) || ' minutes')::interval AS interval_start,
                FIRST_VALUE(Ph) OVER w AS Ph,
                FIRST_VALUE(TDS) OVER w AS TDS,
                FIRST_VALUE(Suhu_Air) OVER w AS Suhu_air,
                FIRST_VALUE(WindDirection) OVER w AS Winddirection,
                FIRST_VALUE(Kecepatan_Angin) OVER w AS Kecepatan_angin,
                FIRST_VALUE(Infrared1) OVER w AS Infrared1,
                FIRST_VALUE(Infrared2) OVER w AS Infrared2,
                FIRST_VALUE(Infrared3) OVER w AS Infrared3,
                FIRST_VALUE(Berat1) OVER w AS Berat1,
                FIRST_VALUE(Waterflow1) OVER w AS Waterflow1,
                FIRST_VALUE(Waterflow2) OVER w AS Waterflow2,
                FIRST_VALUE(Waterflow3) OVER w AS Waterflow3,
                FIRST_VALUE(Waterflow4) OVER w AS Waterflow4,
                FIRST_VALUE(SoilMoisture1) OVER w AS Soilmoisture1,
                FIRST_VALUE(SoilMoisture2) OVER w AS Soilmoisture2,
                FIRST_VALUE(SoilMoisture3) OVER w AS Soilmoisture3,
                FIRST_VALUE(SoilMoisture4) OVER w AS Soilmoisture4,
                FIRST_VALUE(Berat2) OVER w AS Berat2,
                FIRST_VALUE(Berat3) OVER w AS Berat3,
                FIRST_VALUE(Berat4) OVER w AS Berat4,
                FIRST_VALUE(Suhu) OVER w AS Suhu,
                FIRST_VALUE(Tekanan_Udara) OVER w AS Tekanan_udara,
                FIRST_VALUE(PompaNutrisi) OVER w AS Pompanutrisi,
                FIRST_VALUE(PompaAir) OVER w AS PompaAir,
                FIRST_VALUE(LampuUv) OVER w AS LampuUv,
                FIRST_VALUE(pyrano) OVER w AS pyrano,
                FIRST_VALUE(Humidity) OVER w AS Humidity,
                FIRST_VALUE(SVP) OVER w AS SVP,
                FIRST_VALUE(AVP) OVER w AS AVP,
                FIRST_VALUE(VPD) OVER w AS VPD,
                FIRST_VALUE(TemperatureDHT) OVER w AS TemperatureDHT
            FROM ICSFP
            WINDOW w AS (PARTITION BY date_trunc('minute', timestamp) - ((date_part('minute', timestamp)::int % 5) || ' minutes')::interval ORDER BY timestamp DESC)
            ORDER BY interval_start DESC
            LIMIT 100;
        `;

        const data = await dbase_rest.query(query);

        if (data.rowCount > 0) {
            const formattedData = data.rows.map(row => {
                const { interval_start, ...rest } = row;
    
                // Batasi nilai numerik menjadi 2 angka desimal
                const roundedValues = Object.fromEntries(
                    Object.entries(rest).map(([key, value]) => {
                        return [key, typeof value === 'number' ? parseFloat(value.toFixed(2)) : value];
                    })
                );
    
                return {
                    timestamp: moment(interval_start).format("DD-MM-YY HH:mm:ss"),
                    ...roundedValues,
                };
            });
    
            res.status(200).send({
                count: data.rowCount,
                result: formattedData,
            });
    
            console.log("[REST-API] GET LATEST DATA");
        } else {
            res.status(404).send("No data found");
        }
    } catch (error) {
        console.error("[REST-API] Error fetching latest data:", error);
        res.status(500).send("Internal Server Error");
    }                
},


// async get100data(req, res) {
//     try {
//         const query = `
//             SELECT
//                 date_trunc('minute', timestamp) - ((date_part('minute', timestamp)::int % 5) || ' minutes')::interval AS interval_start,
//                 AVG(Ph) AS Ph,
//                 AVG(TDS) AS TDS,
//                 AVG(Suhu_Air) AS Suhu_air,
//                 AVG(WindDirection) AS Winddirection,
//                 AVG(Kecepatan_Angin) AS Kecepatan_angin,
//                 AVG(Infrared1) AS Infrared1,
//                 AVG(Infrared2) AS Infrared2,
//                 AVG(Infrared3) AS Infrared3,
//                 AVG(Berat1) AS Berat1,
//                 AVG(Waterflow1) AS Waterflow1,
//                 AVG(Waterflow2) AS Waterflow2,
//                 AVG(Waterflow3) AS Waterflow3,
//                 AVG(Waterflow4) AS Waterflow4,
//                 AVG(SoilMoisture1) AS Soilmoisture1,
//                 AVG(SoilMoisture2) AS Soilmoisture2,
//                 AVG(SoilMoisture3) AS Soilmoisture3,
//                 AVG(SoilMoisture4) AS Soilmoisture4,
//                 AVG(Berat2) AS Berat2,
//                 AVG(Berat3) AS Berat3,
//                 AVG(Berat4) AS Berat4,
//                 AVG(Suhu) AS Suhu,
//                 AVG(Tekanan_Udara) AS Tekanan_udara,
//                 MAX(PompaNutrisi) AS Pompanutrisi,
//                 MAX(PompaAir) AS PompaAir,
//                 MAX(LampuUv) AS LampuUv,
//                 AVG(pyrano) AS pyrano,
//                 AVG(Humidity) AS Humidity,
//                 AVG(SVP) AS SVP,
//                 AVG(AVP) AS AVP,
//                 AVG(VPD) AS VPD
//             FROM ICSFP
//             GROUP BY interval_start
//             ORDER BY interval_start DESC
//             LIMIT 100;
//         `;
    
//         const data = await dbase_rest.query(query);

//             if (data.rowCount > 0) {
//                 const formattedData = data.rows.map(row => {
//                     const { interval_start, ...rest } = row;
        
//                     // Batasi nilai numerik menjadi 2 angka desimal
//                     const roundedValues = Object.fromEntries(
//                         Object.entries(rest).map(([key, value]) => {
//                             return [key, typeof value === 'number' ? parseFloat(value.toFixed(2)) : value];
//                         })
//                     );
        
//                     return {
//                         timestamp: moment(interval_start).format("DD-MM-YY HH:mm:ss"),
//                         ...roundedValues,
//                     };
//                 });
        
//                 res.status(200).send({
//                     count: data.rowCount,
//                     result: formattedData,
//                 });
        
//                 console.log("[REST-API] GET AVERAGED DATA");
//             } else {
//                 res.status(404).send("No data found");
//             }
//         } catch (error) {
//             console.error("[REST-API] Error fetching averaged data:", error);
//             res.status(500).send("Internal Server Error");
//         }                
// },

async get100datatable(req, res) {
        const data = await dbase_rest.query(`SELECT timestamp, Ph, TDS, Suhu_Air, WindDirection, Kecepatan_Angin, Infrared1, Infrared2, Infrared3, Berat1,  Waterflow1, Waterflow2, Waterflow3, Waterflow4, SoilMoisture1, SoilMoisture2, SoilMoisture3, SoilMoisture4, Berat2, Berat3, Berat4, Suhu, Tekanan_Udara, PompaNutrisi, PompaAir, LampuUv, pyrano, Humidity, SVP, AVP, VPD  FROM ICSFP ORDER BY timestamp DESC LIMIT 100`);
      
        if (data.rowCount > 0) {
            const combinedArray = data.rows.map(row => {
                const { timestamp, ...rest } = row;
                return {
                    timestamp: moment(timestamp).format("DD-MM-YY HH:mm:ss"),
                    ...rest,
                };
            });
      
            res.status(200);
            res.send({
                count: data.rowCount,
                result: combinedArray,
            });
      
            console.log("[REST-API] GET DATA");
        } else {
            res.status(404).send("No data found");
        }
        },


async getDailyAverages(req, res) {
            try {
                const query = `
                    SELECT
                        date_trunc('minute', timestamp) - ((date_part('minute', timestamp)::int % 5) || ' minutes')::interval AS interval_start,
                        AVG(Ph) AS Ph,
                        AVG(TDS) AS TDS,
                        AVG(Suhu_Air) AS Suhu_air,
                        AVG(WindDirection) AS Winddirection,
                        AVG(Kecepatan_Angin) AS Kecepatan_angin,
                        AVG(Infrared1) AS Infrared1,
                        AVG(Infrared2) AS Infrared2,
                        AVG(Infrared3) AS Infrared3,
                        AVG(Berat1) AS Berat1,
                        AVG(Waterflow1) AS Waterflow1,
                        AVG(Waterflow2) AS Waterflow2,
                        AVG(Waterflow3) AS Waterflow3,
                        AVG(Waterflow4) AS Waterflow4,
                        AVG(SoilMoisture1) AS Soilmoisture1,
                        AVG(SoilMoisture2) AS Soilmoisture2,
                        AVG(SoilMoisture3) AS Soilmoisture3,
                        AVG(SoilMoisture4) AS Soilmoisture4,
                        AVG(Berat2) AS Berat2,
                        AVG(Berat3) AS Berat3,
                        AVG(Berat4) AS Berat4,
                        AVG(Suhu) AS Suhu,
                        AVG(Tekanan_Udara) AS Tekanan_udara,
                        MAX(PompaNutrisi) AS Pompanutrisi,
                        MAX(PompaAir) AS PompaAir,
                        MAX(LampuUv) AS LampuUv,
                        AVG(pyrano) AS pyrano,
                        AVG(Humidity) AS Humidity,
                        AVG(SVP) AS SVP,
                        AVG(AVP) AS AVP,
                        AVG(VPD) AS VPD
                    FROM ICSFP
                    WHERE timestamp::date = CURRENT_DATE
                    GROUP BY interval_start
                    ORDER BY interval_start DESC
                `;
            
                const data = await dbase_rest.query(query);
        
                if (data.rowCount > 0) {
                    const formattedData = data.rows.map(row => {
                        const { interval_start, ...rest } = row;
            
                        // Batasi nilai numerik menjadi 2 angka desimal
                        const roundedValues = Object.fromEntries(
                            Object.entries(rest).map(([key, value]) => {
                                return [key, typeof value === 'number' ? parseFloat(value.toFixed(2)) : value];
                            })
                        );
            
                        return {
                            timestamp: moment(interval_start).format("DD-MM-YY HH:mm:ss"),
                            ...roundedValues,
                        };
                    });
            
                    res.status(200).send({
                        count: data.rowCount,
                        result: formattedData,
                    });
            
                    console.log("[REST-API] GET DAILY AVERAGED DATA");
                } else {
                    res.status(404).send("No data found for today");
                }
            } catch (error) {
                console.error("[REST-API] Error fetching daily averaged data:", error);
                res.status(500).send("Internal Server Error");
            }                
        },
        
async getDataForOneDay(req, res) {
            // Mendapatkan tanggal saat ini
            const currentDate = moment().format('YYYY-MM-DD');
        
            try {
                const data = await dbase_rest.query(`
                    SELECT timestamp, Ph, TDS, Suhu_Air, WindDirection, Kecepatan_Angin, Infrared1, Infrared2, Infrared3, Berat1,  Waterflow1, Waterflow2, Waterflow3, Waterflow4, SoilMoisture1, SoilMoisture2, SoilMoisture3, SoilMoisture4, Berat2, Berat3, Berat4, Suhu, Tekanan_Udara, PompaNutrisi, PompaAir, LampuUv, pyrano, Humidity, SVP, AVP, VPD 
                    FROM ICSFP 
                    WHERE timestamp::date = $1 
                    ORDER BY timestamp DESC
                `, [currentDate]);
        
                if (data.rowCount > 0) {
                    const combinedArray = data.rows.map(row => {
                        const { timestamp, ...rest } = row;
                        return {
                            timestamp: moment(timestamp).format("DD-MM-YY HH:mm:ss"),
                            ...rest,
                        };
                    });
        
                    res.status(200).json({
                        count: data.rowCount,
                        result: combinedArray,
                    });
        
                    console.log(`[REST-API] GET DATA for ${currentDate}`);
                } else {
                    res.status(404).json({ message: "No data found for today" });
                }
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Internal Server Error' });
            }
        },

async getDataForSevenDays(req, res) {
            try {
                // Mendapatkan tanggal saat ini
                const currentDate = moment().format('YYYY-MM-DD');
                
                // Menghitung tanggal 7 hari yang lalu
                const sevenDaysAgo = moment().subtract(7, 'days').format('YYYY-MM-DD');
          
                const data = await dbase_rest.query(`
                    SELECT timestamp, Ph, TDS, Suhu_Air, WindDirection, Kecepatan_Angin, Infrared1, Infrared2, Infrared3, Berat1,  Waterflow1, Waterflow2, Waterflow3, Waterflow4, SoilMoisture1, SoilMoisture2, SoilMoisture3, SoilMoisture4, Berat2, Berat3, Berat4, Suhu, Tekanan_Udara, PompaNutrisi, PompaAir, LampuUv, pyrano, Humidity, SVP, AVP, VPD 
                    FROM ICSFP 
                    WHERE timestamp::date BETWEEN $1 AND $2
                    ORDER BY timestamp DESC
                `, [sevenDaysAgo, currentDate]);
          
                if (data.rowCount > 0) {
                    const combinedArray = data.rows.map(row => {
                        const { timestamp, ...rest } = row;
                        return {
                            timestamp: moment(timestamp).format("DD-MM-YY HH:mm:ss"),
                            ...rest,
                        };
                    });
          
                    res.status(200).json({
                        count: data.rowCount,
                        result: combinedArray,
                    });
          
                    console.log(`[REST-API] GET DATA for the last 7 days`);
                } else {
                    res.status(404).json({ message: "No data found for the last 7 days" });
                }
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Internal Server Error' });
            }
          },

    async getWeeklyAverages(req, res) {
            try {
                const query = `
                    SELECT
                        date_trunc('minute', timestamp) - ((date_part('minute', timestamp)::int % 30) || ' minutes')::interval AS interval_start,
                        AVG(Ph) AS Ph,
                        AVG(TDS) AS TDS,
                        AVG(Suhu_Air) AS Suhu_air,
                        AVG(WindDirection) AS Winddirection,
                        AVG(Kecepatan_Angin) AS Kecepatan_angin,
                        AVG(Infrared1) AS Infrared1,
                        AVG(Infrared2) AS Infrared2,
                        AVG(Infrared3) AS Infrared3,
                        AVG(Berat1) AS Berat1,
                        AVG(Waterflow1) AS Waterflow1,
                        AVG(Waterflow2) AS Waterflow2,
                        AVG(Waterflow3) AS Waterflow3,
                        AVG(Waterflow4) AS Waterflow4,
                        AVG(SoilMoisture1) AS Soilmoisture1,
                        AVG(SoilMoisture2) AS Soilmoisture2,
                        AVG(SoilMoisture3) AS Soilmoisture3,
                        AVG(SoilMoisture4) AS Soilmoisture4,
                        AVG(Berat2) AS Berat2,
                        AVG(Berat3) AS Berat3,
                        AVG(Berat4) AS Berat4,
                        AVG(Suhu) AS Suhu,
                        AVG(Tekanan_Udara) AS Tekanan_udara,
                        MAX(PompaNutrisi) AS Pompanutrisi,
                        MAX(PompaAir) AS PompaAir,
                        MAX(LampuUv) AS LampuUv,
                        AVG(pyrano) AS pyrano,
                        AVG(Humidity) AS Humidity,
                        AVG(SVP) AS SVP,
                        AVG(AVP) AS AVP,
                        AVG(VPD) AS VPD
                    FROM ICSFP
                    WHERE timestamp::date BETWEEN CURRENT_DATE - INTERVAL '7 days' AND CURRENT_DATE
                    GROUP BY interval_start
                    ORDER BY interval_start DESC
                `;
            
                const data = await dbase_rest.query(query);
        
                if (data.rowCount > 0) {
                    const formattedData = data.rows.map(row => {
                        const { interval_start, ...rest } = row;
            
                        // Batasi nilai numerik menjadi 2 angka desimal
                        const roundedValues = Object.fromEntries(
                            Object.entries(rest).map(([key, value]) => {
                                return [key, typeof value === 'number' ? parseFloat(value.toFixed(2)) : value];
                            })
                        );
            
                        return {
                            timestamp: moment(interval_start).format("DD-MM-YY HH:mm:ss"),
                            ...roundedValues,
                        };
                    });
            
                    res.status(200).send({
                        count: data.rowCount,
                        result: formattedData,
                    });
            
                    console.log("[REST-API] GET WEEKLY AVERAGED DATA");
                } else {
                    res.status(404).send("No data found in the last 7 days");
                }
            } catch (error) {
                console.error("[REST-API] Error fetching weekly averaged data:", error);
                res.status(500).send("Internal Server Error");
            }                
        },
        

async getDataForonemonth(req, res) {
            try {
                // Mendapatkan tanggal saat ini
                const currentDate = moment().format('YYYY-MM-DD');
                
                // Menghitung tanggal 7 hari yang lalu
                const onemonthago = moment().subtract(30, 'days').format('YYYY-MM-DD');
          
                const data = await dbase_rest.query(`
                    SELECT timestamp, Ph, TDS, Suhu_Air, WindDirection, Kecepatan_Angin, Infrared1, Infrared2, Infrared3, Berat1,  Waterflow1, Waterflow2, Waterflow3, Waterflow4, SoilMoisture1, SoilMoisture2, SoilMoisture3, SoilMoisture4, Berat2, Berat3, Berat4, Suhu, Tekanan_Udara, PompaNutrisi, PompaAir, LampuUv, pyrano, Humidity, SVP, AVP, VPD 
                    FROM ICSFP 
                    WHERE timestamp::date BETWEEN $1 AND $2
                    ORDER BY timestamp DESC
                `, [onemonthago, currentDate]);
          
                if (data.rowCount > 0) {
                    const combinedArray = data.rows.map(row => {
                        const { timestamp, ...rest } = row;
                        return {
                            timestamp: moment(timestamp).format("DD-MM-YY HH:mm:ss"),
                            ...rest,
                        };
                    });
          
                    res.status(200).json({
                        count: data.rowCount,
                        result: combinedArray,
                    });
          
                    console.log(`[REST-API] GET DATA for the last 30 days`);
                } else {
                    res.status(404).json({ message: "No data found for the last 30 days" });
                }
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Internal Server Error' });
            }
          },
        
    async getMonthlyAverages(req, res) {
            try {
                const query = `
                    SELECT
                        date_trunc('hour', timestamp) AS interval_start,
                        AVG(Ph) AS Ph,
                        AVG(TDS) AS TDS,
                        AVG(Suhu_Air) AS Suhu_air,
                        AVG(WindDirection) AS Winddirection,
                        AVG(Kecepatan_Angin) AS Kecepatan_angin,
                        AVG(Infrared1) AS Infrared1,
                        AVG(Infrared2) AS Infrared2,
                        AVG(Infrared3) AS Infrared3,
                        AVG(Berat1) AS Berat1,
                        AVG(Waterflow1) AS Waterflow1,
                        AVG(Waterflow2) AS Waterflow2,
                        AVG(Waterflow3) AS Waterflow3,
                        AVG(Waterflow4) AS Waterflow4,
                        AVG(SoilMoisture1) AS Soilmoisture1,
                        AVG(SoilMoisture2) AS Soilmoisture2,
                        AVG(SoilMoisture3) AS Soilmoisture3,
                        AVG(SoilMoisture4) AS Soilmoisture4,
                        AVG(Berat2) AS Berat2,
                        AVG(Berat3) AS Berat3,
                        AVG(Berat4) AS Berat4,
                        AVG(Suhu) AS Suhu,
                        AVG(Tekanan_Udara) AS Tekanan_udara,
                        MAX(PompaNutrisi) AS Pompanutrisi,
                        MAX(PompaAir) AS PompaAir,
                        MAX(LampuUv) AS LampuUv,
                        AVG(pyrano) AS pyrano,
                        AVG(Humidity) AS Humidity,
                        AVG(SVP) AS SVP,
                        AVG(AVP) AS AVP,
                        AVG(VPD) AS VPD
                    FROM ICSFP
                    WHERE timestamp::date BETWEEN CURRENT_DATE - INTERVAL '30 days' AND CURRENT_DATE
                    GROUP BY interval_start
                    ORDER BY interval_start DESC
                `;
            
                const data = await dbase_rest.query(query);
        
                if (data.rowCount > 0) {
                    const formattedData = data.rows.map(row => {
                        const { interval_start, ...rest } = row;
            
                        // Batasi nilai numerik menjadi 2 angka desimal
                        const roundedValues = Object.fromEntries(
                            Object.entries(rest).map(([key, value]) => {
                                return [key, typeof value === 'number' ? parseFloat(value.toFixed(2)) : value];
                            })
                        );
            
                        return {
                            timestamp: moment(interval_start).format("DD-MM-YY HH:mm:ss"),
                            ...roundedValues,
                        };
                    });
            
                    res.status(200).send({
                        count: data.rowCount,
                        result: formattedData,
                    });
            
                    console.log("[REST-API] GET MONTHLY AVERAGED DATA");
                } else {
                    res.status(404).send("No data found in the last 30 days");
                }
            } catch (error) {
                console.error("[REST-API] Error fetching monthly averaged data:", error);
                res.status(500).send("Internal Server Error");
            }                
        },        

    
async download100latestdata(req, res) {
            try {
                const query = `
                SELECT
                date_trunc('minute', timestamp) - ((date_part('minute', timestamp)::int % 5) || ' minutes')::interval AS interval_start,
                AVG(Ph) AS Ph,
                AVG(TDS) AS TDS,
                AVG(Suhu_Air) AS Suhu_air,
                AVG(WindDirection) AS Winddirection,
                AVG(Kecepatan_Angin) AS Kecepatan_angin,
                AVG(Infrared1) AS Infrared1,
                AVG(Infrared2) AS Infrared2,
                AVG(Infrared3) AS Infrared3,
                AVG(Berat1) AS Berat1,
                AVG(Waterflow1) AS Waterflow1,
                AVG(Waterflow2) AS Waterflow2,
                AVG(Waterflow3) AS Waterflow3,
                AVG(Waterflow4) AS Waterflow4,
                AVG(SoilMoisture1) AS Soilmoisture1,
                AVG(SoilMoisture2) AS Soilmoisture2,
                AVG(SoilMoisture3) AS Soilmoisture3,
                AVG(SoilMoisture4) AS Soilmoisture4,
                AVG(Berat2) AS Berat2,
                AVG(Berat3) AS Berat3,
                AVG(Berat4) AS Berat4,
                AVG(Suhu) AS Suhu,
                AVG(Tekanan_Udara) AS Tekanan_udara,
                MAX(PompaNutrisi) AS Pompanutrisi,
                MAX(PompaAir) AS PompaAir,
                MAX(LampuUv) AS LampuUv,
                AVG(pyrano) AS pyrano,
                AVG(Humidity) AS Humidity,
                AVG(SVP) AS SVP,
                AVG(AVP) AS AVP,
                AVG(VPD) AS VPD
            FROM ICSFP
            GROUP BY interval_start
            ORDER BY interval_start DESC
            LIMIT 100;
        `;

                const data = await dbase_rest.query(query);
    
                if (data.rowCount > 0) {
                    const formattedData = data.rows.map(row => {
                        const { interval_start, ...rest } = row;
        
                        const roundedValues = Object.fromEntries(
                            Object.entries(rest).map(([key, value]) => {
                                return [key, typeof value === 'number' ? parseFloat(value.toFixed(2)) : value];
                            })
                        );
        
                        return {
                            timestamp: moment(interval_start).format("DD-MM-YY HH:mm:ss"),
                            ...roundedValues,
                        };
                    });
        
                    // Konversi data ke format CSV
                    const csvData = [
                        Object.keys(formattedData[0]).join(','), // Menambahkan baris header
                        ...formattedData.map(item => Object.values(item).join(','))
                    ].join('\n');
        
                    // Atur header untuk unduhan CSV
                    res.setHeader('Content-Type', 'text/csv');
                    const currentDate = moment().format("DD/MM/YYYY");
                    res.setHeader('Content-Disposition', `attachment; filename="100latestdata_${currentDate}.csv"`);
    
                    // Kirim data CSV sebagai respons
                    res.status(200).send(csvData);
        
                    console.log("[REST-API] Data CSV Diunduh");
                } else {
                    res.status(404).send("Tidak ada data ditemukan");
                }
            } catch (error) {
                console.error("[REST-API] Kesalahan mengambil data untuk diunduh:", error);
                res.status(500).send("Kesalahan Server Internal");
            }
        },

        async downloaddailydata(req, res) {
            try {
                const query = `
                SELECT
                date_trunc('minute', timestamp) - ((date_part('minute', timestamp)::int % 5) || ' minutes')::interval AS interval_start,
                AVG(Ph) AS Ph,
                AVG(TDS) AS TDS,
                AVG(Suhu_Air) AS Suhu_air,
                AVG(WindDirection) AS Winddirection,
                AVG(Kecepatan_Angin) AS Kecepatan_angin,
                AVG(Infrared1) AS Infrared1,
                AVG(Infrared2) AS Infrared2,
                AVG(Infrared3) AS Infrared3,
                AVG(Berat1) AS Berat1,
                AVG(Waterflow1) AS Waterflow1,
                AVG(Waterflow2) AS Waterflow2,
                AVG(Waterflow3) AS Waterflow3,
                AVG(Waterflow4) AS Waterflow4,
                AVG(SoilMoisture1) AS Soilmoisture1,
                AVG(SoilMoisture2) AS Soilmoisture2,
                AVG(SoilMoisture3) AS Soilmoisture3,
                AVG(SoilMoisture4) AS Soilmoisture4,
                AVG(Berat2) AS Berat2,
                AVG(Berat3) AS Berat3,
                AVG(Berat4) AS Berat4,
                AVG(Suhu) AS Suhu,
                AVG(Tekanan_Udara) AS Tekanan_udara,
                MAX(PompaNutrisi) AS Pompanutrisi,
                MAX(PompaAir) AS PompaAir,
                MAX(LampuUv) AS LampuUv,
                AVG(pyrano) AS pyrano,
                AVG(Humidity) AS Humidity,
                AVG(SVP) AS SVP,
                AVG(AVP) AS AVP,
                AVG(VPD) AS VPD
            FROM ICSFP
            WHERE timestamp::date = CURRENT_DATE
            GROUP BY interval_start
            ORDER BY interval_start DESC
        `;

                const data = await dbase_rest.query(query);
    
                if (data.rowCount > 0) {
                    const formattedData = data.rows.map(row => {
                        const { interval_start, ...rest } = row;
        
                        const roundedValues = Object.fromEntries(
                            Object.entries(rest).map(([key, value]) => {
                                return [key, typeof value === 'number' ? parseFloat(value.toFixed(2)) : value];
                            })
                        );
        
                        return {
                            timestamp: moment(interval_start).format("DD-MM-YY HH:mm:ss"),
                            ...roundedValues,
                        };
                    });
        
                    // Konversi data ke format CSV
                    const csvData = [
                        Object.keys(formattedData[0]).join(','), // Menambahkan baris header
                        ...formattedData.map(item => Object.values(item).join(','))
                    ].join('\n');
        
                    // Atur header untuk unduhan CSV
                    res.setHeader('Content-Type', 'text/csv');
                    const currentDate = moment().format("DD/MM/YYYY");
                    res.setHeader('Content-Disposition', `attachment; filename="daily/datafrom_${currentDate}.csv"`);
    
                    // Kirim data CSV sebagai respons
                    res.status(200).send(csvData);
        
                    console.log("[REST-API] Data CSV Diunduh");
                } else {
                    res.status(404).send("Tidak ada data ditemukan");
                }
            } catch (error) {
                console.error("[REST-API] Kesalahan mengambil data untuk diunduh:", error);
                res.status(500).send("Kesalahan Server Internal");
            }
        },

    async downloadweeklydata(req, res) {
            try {
                const query = `
                SELECT
                        date_trunc('minute', timestamp) - ((date_part('minute', timestamp)::int % 30) || ' minutes')::interval AS interval_start,
                        AVG(Ph) AS Ph,
                        AVG(TDS) AS TDS,
                        AVG(Suhu_Air) AS Suhu_air,
                        AVG(WindDirection) AS Winddirection,
                        AVG(Kecepatan_Angin) AS Kecepatan_angin,
                        AVG(Infrared1) AS Infrared1,
                        AVG(Infrared2) AS Infrared2,
                        AVG(Infrared3) AS Infrared3,
                        AVG(Berat1) AS Berat1,
                        AVG(Waterflow1) AS Waterflow1,
                        AVG(Waterflow2) AS Waterflow2,
                        AVG(Waterflow3) AS Waterflow3,
                        AVG(Waterflow4) AS Waterflow4,
                        AVG(SoilMoisture1) AS Soilmoisture1,
                        AVG(SoilMoisture2) AS Soilmoisture2,
                        AVG(SoilMoisture3) AS Soilmoisture3,
                        AVG(SoilMoisture4) AS Soilmoisture4,
                        AVG(Berat2) AS Berat2,
                        AVG(Berat3) AS Berat3,
                        AVG(Berat4) AS Berat4,
                        AVG(Suhu) AS Suhu,
                        AVG(Tekanan_Udara) AS Tekanan_udara,
                        MAX(PompaNutrisi) AS Pompanutrisi,
                        MAX(PompaAir) AS PompaAir,
                        MAX(LampuUv) AS LampuUv,
                        AVG(pyrano) AS pyrano,
                        AVG(Humidity) AS Humidity,
                        AVG(SVP) AS SVP,
                        AVG(AVP) AS AVP,
                        AVG(VPD) AS VPD
                    FROM ICSFP
                    WHERE timestamp::date BETWEEN CURRENT_DATE - INTERVAL '7 days' AND CURRENT_DATE
                    GROUP BY interval_start
                    ORDER BY interval_start DESC
                `;

                const data = await dbase_rest.query(query);
    
                if (data.rowCount > 0) {
                    const formattedData = data.rows.map(row => {
                        const { interval_start, ...rest } = row;
        
                        const roundedValues = Object.fromEntries(
                            Object.entries(rest).map(([key, value]) => {
                                return [key, typeof value === 'number' ? parseFloat(value.toFixed(2)) : value];
                            })
                        );
        
                        return {
                            timestamp: moment(interval_start).format("DD-MM-YY HH:mm:ss"),
                            ...roundedValues,
                        };
                    });
        
                    // Konversi data ke format CSV
                    const csvData = [
                        Object.keys(formattedData[0]).join(','), // Menambahkan baris header
                        ...formattedData.map(item => Object.values(item).join(','))
                    ].join('\n');
        
                    // Atur header untuk unduhan CSV
                    res.setHeader('Content-Type', 'text/csv');
                    const currentDate = moment().format("DD/MM/YYYY");
                    res.setHeader('Content-Disposition', `attachment; filename="weekly/datafrom_${currentDate}.csv"`);
    
                    // Kirim data CSV sebagai respons
                    res.status(200).send(csvData);
        
                    console.log("[REST-API] Data CSV Diunduh");
                } else {
                    res.status(404).send("Tidak ada data ditemukan");
                }
            } catch (error) {
                console.error("[REST-API] Kesalahan mengambil data untuk diunduh:", error);
                res.status(500).send("Kesalahan Server Internal");
            }
        },

        async downloadmonthlydata(req, res) {
            try {
                const query = `
                SELECT
                        date_trunc('hour', timestamp) AS interval_start,
                        AVG(Ph) AS Ph,
                        AVG(TDS) AS TDS,
                        AVG(Suhu_Air) AS Suhu_air,
                        AVG(WindDirection) AS Winddirection,
                        AVG(Kecepatan_Angin) AS Kecepatan_angin,
                        AVG(Infrared1) AS Infrared1,
                        AVG(Infrared2) AS Infrared2,
                        AVG(Infrared3) AS Infrared3,
                        AVG(Berat1) AS Berat1,
                        AVG(Waterflow1) AS Waterflow1,
                        AVG(Waterflow2) AS Waterflow2,
                        AVG(Waterflow3) AS Waterflow3,
                        AVG(Waterflow4) AS Waterflow4,
                        AVG(SoilMoisture1) AS Soilmoisture1,
                        AVG(SoilMoisture2) AS Soilmoisture2,
                        AVG(SoilMoisture3) AS Soilmoisture3,
                        AVG(SoilMoisture4) AS Soilmoisture4,
                        AVG(Berat2) AS Berat2,
                        AVG(Berat3) AS Berat3,
                        AVG(Berat4) AS Berat4,
                        AVG(Suhu) AS Suhu,
                        AVG(Tekanan_Udara) AS Tekanan_udara,
                        MAX(PompaNutrisi) AS Pompanutrisi,
                        MAX(PompaAir) AS PompaAir,
                        MAX(LampuUv) AS LampuUv,
                        AVG(pyrano) AS pyrano,
                        AVG(Humidity) AS Humidity,
                        AVG(SVP) AS SVP,
                        AVG(AVP) AS AVP,
                        AVG(VPD) AS VPD
                    FROM ICSFP
                    WHERE timestamp::date BETWEEN CURRENT_DATE - INTERVAL '30 days' AND CURRENT_DATE
                    GROUP BY interval_start
                    ORDER BY interval_start DESC
                `;

                const data = await dbase_rest.query(query);
    
                if (data.rowCount > 0) {
                    const formattedData = data.rows.map(row => {
                        const { interval_start, ...rest } = row;
        
                        const roundedValues = Object.fromEntries(
                            Object.entries(rest).map(([key, value]) => {
                                return [key, typeof value === 'number' ? parseFloat(value.toFixed(2)) : value];
                            })
                        );
        
                        return {
                            timestamp: moment(interval_start).format("DD-MM-YY HH:mm:ss"),
                            ...roundedValues,
                        };
                    });
        
                    // Konversi data ke format CSV
                    const csvData = [
                        Object.keys(formattedData[0]).join(','), // Menambahkan baris header
                        ...formattedData.map(item => Object.values(item).join(','))
                    ].join('\n');
        
                    // Atur header untuk unduhan CSV
                    res.setHeader('Content-Type', 'text/csv');
                    const currentDate = moment().format("DD/MM/YYYY");
                    res.setHeader('Content-Disposition', `attachment; filename="monthly/datafrom_${currentDate}.csv"`);
    
                    // Kirim data CSV sebagai respons
                    res.status(200).send(csvData);
        
                    console.log("[REST-API] Data CSV Diunduh");
                } else {
                    res.status(404).send("Tidak ada data ditemukan");
                }
            } catch (error) {
                console.error("[REST-API] Kesalahan mengambil data untuk diunduh:", error);
                res.status(500).send("Kesalahan Server Internal");
            }
        }    
      }

