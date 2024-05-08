// import { Typography, Box } from "@mui/material";
// import Image from "next/image";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import { shadows } from "@mui/system";

// export default function LearnMoonquakeMap() {
//   var text1 = (
//     <div>
//       <p>
//         Around the world, there are billions of people living within the danger
//         zone for earthquakes, and as history has shown us (along with plenty of
//         Hollywood renditions), earthquakes can be incredibly devastating. From
//         toppling buildings and cracking open the surface of the earth itself,
//         these natural phenomena are terrifying and unpredictable. Nearly 240,000
//         miles away from our planet, our beloved moon wrestles with a similar
//         problem, but obviously, they are called moonquakes. Since no one lives
//         on our lunar neighbor, moonquakes do not get much attention, but they
//         can be incredibly powerful, and last up to 20 times longer than
//         earthquakes on Earth! The moon is dry, cool and mostly rigid, like a
//         chunk of stone or iron. So moonquakes set it vibrating like a tuning
//         fork. According to Neal Armstrong the moon was ringing like a bell when
//         he first felt a moonquake. Even if a moonquake is not intense, it could
//         continue more than 10 minutes and for smaller trembling to continue for
//         hours afterwards. Neal said, for a lunar habitat, that persistence could
//         be more significant than a moonquakes magnitude. If we ever decide to
//         colonize our nearest celestial companion, these quakes could prove to be
//         quite a problem, so understanding them is crucial. Moonquakes can be
//         caused by the tidal pull of Earth on the moon, meteor impacts, or the
//         change in temperature on the surface of the moon. There are at least
//         four different kinds of moonquakes:
//       </p>
//       <p>
//         (1) deep moonquakes about 700 km below the surface, probably caused by
//         tides;
//       </p>
//       <p>(2) vibrations from the impact of meteorites; </p>
//       <p>
//         (3) thermal quakes caused by the expansion of the frigid crust when
//         first illuminated by the morning sun after two weeks of deep-freeze
//         lunar night;
//       </p>
//       <p>
//         (4) shallow moonquakes only 20 or 30 kilometers below the surface. Our
//         website shows all the seismic phenomena caught by apollo 11-17 between
//         19 November 1969 - 30 September 1977 and categorized them according to
//         their type. With the help of our website, we want to spread knowledge to
//         general people on the earth about moonquakes. They will know where the
//         quakes happen the most, how they happen, how long they last etc. Thus
//         enabling us to secure a one step ahead to colonize the moon with
//         quake-proof housing.
//       </p>
//     </div>
//   );

//   var text2 = (
//     <div>
//       <p>
//         Moonquake Summary: Deep Moonquake: Deep moonquakes originate hundreds of
//         kilometers below the surface. These deep-seated moonquakes are likely
//         caused by tidal forces. Just as the Moon tugs on the Earth&quot;s
//         surface and causes ocean tides here, the Earth pulls on the Moon and
//         deforms it. Researchers think that deep moonquakes are probably caused
//         by the Moon continuously stretching and relaxing. Shallow Moonquake:
//         Shallow moonquakes originate just a few tens of kilometers below the
//         surface. Scientists think that shallow moonquakes are probably the
//         result of the Moon shrinking over time. The Moon is getting smaller
//         because its interior is cooling. This shrinkage—imagine a grape drying
//         into a raisin—creates stress within the Moon, which triggers moonquakes
//         near the surface. Shallow moonquakes often last longer and are more
//         powerful than other types of moonquakes. Meteorite: Moonquakes can be
//         caused by impacts. When an asteroid, comet, or meteoroid strikes the
//         Moon&quot;s surface, it can trigger moonquakes. Earth&quot;s relatively
//         thick atmosphere causes most space debris to burn up from friction
//         before it strikes our planet&quot;s surface. But the Moon isn&quot;t so
//         lucky. Because there is almost no atmosphere, most space debris heading
//         toward the Moon impacts its surface, sometimes causing giant craters and
//         moonquakes. Artificial Impact: Artificial Impacts can be caused by
//         objects that are made or produced by human beings rather than occurring
//         naturally. These objects are launch vehicles and lunar modules that were
//         directed at the lunar surface on purpose to create seismic sources of
//         well defined timing and location. Saturn V was an American super
//         heavy-lift launch vehicle developed by NASA under the Apollo program for
//         human exploration of the Moon. Crash landing or launching of these heavy
//         lifting vehicles can cause a moonquake. Lunar Module is a small craft
//         used for traveling between the moons surface and an orbiting
//         spacecraft.Lunar module cause far lighter impact on the moon than the
//         launch vehicle but the impact still is significant.
//       </p>
//     </div>
//   );
//   var text3 = (
//     <div>
//       <p>
//         The Apollo 11 seismometer returned data for just three weeks but
//         provided a useful first look at lunar seismology. More advanced
//         seismometers were deployed at the Apollo 12, 14, 15, and 16 landing
//         sites and transmitted data to Earth until September 1977. Each of these
//         seismometers measured all three components of ground displacement
//         (up-down, north-south, and east-west).{" "}
//       </p>
//       <h4>Apollo 11</h4>
//       <p>
//         The Apollo 11 Lunar Module (LM) Eagle was the first crewed vehicle to
//         land on the Moon. It carried two astronauts, Commander Neil A. Armstrong
//         and LM pilot Edwin E. Buzz Aldrin, Jr., the first men to walk on the
//         Moon. Also included on the LM was the Early Apollo Scientific Experiment
//         Package (EASEP), which consisted of several self-contained experiments
//         to be deployed and left on the lunar surface, and other scientific and
//         sample collection apparatus.
//       </p>
//       <h4>Apollo 12</h4>
//       <p>
//         The Apollo 12 Lunar Module (LM) Intrepid was the second crewed vehicle
//         to land on the Moon. It carried two astronauts, Commander Charles P.
//         Pete Conrad and LM pilot Alan L. Bean, the third and fourth men to walk
//         on the Moon. Also included on the LM was the Apollo Lunar Surface
//         Experiments Package (ALSEP) containing scientific experiments to be
//         deployed and left on the lunar surface and other scientific and sample
//         collection apparatus. The experiments performed on the Moon, in addition
//         to the ALSEP suite, were geologic sample collection, surface
//         photography, soil mechanics investigations to study the physical
//         properties of the lunar regolith, the solar wind composition experiment
//         which collected samples of solar wind for return to Earth, and
//         collection of parts of the Surveyor 3 spacecraft.
//       </p>
//       <h4>Apollo 15</h4>
//       <p>
//         The Apollo 15 lunar module (LM) Falcon was the fourth crewed vehicle to
//         land on the Moon. It carried two astronauts, Commander David R. Scott
//         and LM pilot James B. Irwin, the seventh and eighth men to walk on the
//         Moon. The LM also carried a Lunar Roving Vehicle (LRV), an Apollo Lunar
//         Surface Experiments Package (ALSEP) that contained scientific
//         experiments to be deployed and left on the lunar surface, and other
//         scientific and sample collection apparatus. The experiments performed on
//         the Moon, in addition to the ALSEP suite, were geologic sample
//         collection, surface photography, soil mechanics investigations to study
//         physical properties of the lunar regolith, and the solar wind
//         composition experiment which collected samples of solar wind particles
//         for return to Earth.
//       </p>
//       <h4>Apollo 16</h4>
//       <p>
//         The Apollo 16 lunar module (LM) Orion was the fifth crewed vehicle to
//         land on the Moon. It carried two astronauts, Commander John W. Young and
//         LM pilot Charles M. Duke Jr., the ninth and tenth men to walk on the
//         Moon. The LM also carried a Lunar Roving Vehicle (LRV), an Apollo Lunar
//         Surface Experiments Package (ALSEP) that contained scientific
//         experiments to be deployed and left on the lunar surface, and other
//         scientific and sample collection apparatus. The experiments performed on
//         the Moon, in addition to the ALSEP suite, were geologic sample
//         collection, surface photography, soil mechanics investigations to study
//         the physical properties of the lunar regolith, the solar wind
//         composition experiment which collected samples of solar wind for return
//         to Earth, a cosmic-ray detector to measure heavy cosmic rays, a
//         far-ultraviolet camera for lyman-alpha astronomical observations, and a
//         portable surface magnetometer to study local magnetic sources.
//       </p>
//       <h4>Apollo 17</h4>
//       <p>
//         The Apollo 17 Lunar Module (LM) Challenger was the sixth and last lunar
//         lander in the Apollo program. It carried two astronauts, Commander
//         Eugene A. Cernan and LM pilot Harrison H. Schmitt, the eleventh and
//         twelfth men to walk on the Moon. Schmitt was the first
//         scientist-astronaut to walk on the Moon. The LM also carried a Lunar
//         Roving Vehicle (LRV), an Apollo Lunar Surface Experiments Package
//         (ALSEP) that contained scientific experiments to be deployed and left on
//         the lunar surface, and other scientific and sample collection apparatus.
//       </p>
//     </div>
//   );

//   return (
//     <Box sx={{ backgroundImage: 'url("bg.jpg")' }}>
//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <Card
//           sx={{
//             minWidth: 500,
//             maxWidth: 900,
//             boxShadow: 3,
//           }}>
//           <CardContent>
//             <Typography variant='subtitle2' color='text.secondary'>
//               {text1}
//             </Typography>
//           </CardContent>
//         </Card>
//       </div>
//       <Typography
//         sx={{
//           fontFamily: "Comfortaa",
//           fontWeight: "bold",
//           fontSize: "14px",
//           color: "white",
//           m: 8,
//         }}>
//         Moonquake types
//       </Typography>
//       <div
//         style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
//         <Card
//           sx={{
//             minWidth: 500,
//             maxWidth: 900,
//             boxShadow: 3,
//           }}>
//           <CardContent>
//             <Typography variant='subtitle2' color='text.secondary'>
//               {text2}
//             </Typography>
//           </CardContent>
//         </Card>
//       </div>
//       <Box sx={{ ml: 20 }}>
//         <Image
//           src='/Apollo_11.jpg'
//           width={500}
//           height={700}
//           layout='intrinsic'
//           alt='apollo'
//         />
//       </Box>
//       <Typography
//         sx={{
//           fontFamily: "Comfortaa",
//           fontWeight: "bold",
//           fontSize: "14px",
//           p: 8,
//           color: "white",
//         }}>
//         Apollo Lunar Modules:
//       </Typography>
//       <div style={{ display: "flex", justifyContent: "center", boxShadow: 3 }}>
//         <Card
//           sx={{
//             minWidth: 500,
//             maxWidth: 900,
//           }}>
//           <CardContent>
//             <Typography variant='subtitle2' color='text.secondary'>
//               {text3}
//             </Typography>
//           </CardContent>
//         </Card>
//       </div>
//     </Box>
//   );
// }
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";
import { useSpring, animated, config } from "@react-spring/three";
import SidebarItems from "../components/ui/SiderbarItems";
import { IconButton } from "@mui/material";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import { useState } from "react";



export default function LearnMoonquakeMap() {
  const theme = useTheme();
  
  // Text content and image source
  const text1 = (
    <div>
       <div>
      <p>
        Around the world, there are billions of people living within the danger
        zone for earthquakes, and as history has shown us (along with plenty of
        Hollywood renditions), earthquakes can be incredibly devastating. From
        toppling buildings and cracking open the surface of the earth itself,
        these natural phenomena are terrifying and unpredictable. Nearly 240,000
        miles away from our planet, our beloved moon wrestles with a similar
        problem, but obviously, they are called moonquakes. Since no one lives
        on our lunar neighbor, moonquakes do not get much attention, but they
        can be incredibly powerful, and last up to 20 times longer than
        earthquakes on Earth! The moon is dry, cool and mostly rigid, like a
        chunk of stone or iron. So moonquakes set it vibrating like a tuning
        fork. According to Neal Armstrong the moon was ringing like a bell when
        he first felt a moonquake. Even if a moonquake is not intense, it could
        continue more than 10 minutes and for smaller trembling to continue for
        hours afterwards. Neal said, for a lunar habitat, that persistence could
        be more significant than a moonquakes magnitude. If we ever decide to
        colonize our nearest celestial companion, these quakes could prove to be
        quite a problem, so understanding them is crucial. Moonquakes can be
        caused by the tidal pull of Earth on the moon, meteor impacts, or the
        change in temperature on the surface of the moon. There are at least
        four different kinds of moonquakes:
      </p>
      <p>
        (1) deep moonquakes about 700 km below the surface, probably caused by
        tides;
      </p>
      <p>(2) vibrations from the impact of meteorites; </p>
      <p>
        (3) thermal quakes caused by the expansion of the frigid crust when
        first illuminated by the morning sun after two weeks of deep-freeze
        lunar night;
      </p>
      <p>
        (4) shallow moonquakes only 20 or 30 kilometers below the surface. Our
        website shows all the seismic phenomena caught by apollo 11-17 between
        19 November 1969 - 30 September 1977 and categorized them according to
        their type. With the help of our website, we want to spread knowledge to
        general people on the earth about moonquakes. They will know where the
        quakes happen the most, how they happen, how long they last etc. Thus
        enabling us to secure a one step ahead to colonize the moon with
        quake-proof housing.
      </p>
    </div>
    </div>
  );

  const text2 = (
    <div>
      <div>
      <p>
        Moonquake Summary: Deep Moonquake: Deep moonquakes originate hundreds of
        kilometers below the surface. These deep-seated moonquakes are likely
        caused by tidal forces. Just as the Moon tugs on the Earth&quot;s
        surface and causes ocean tides here, the Earth pulls on the Moon and
        deforms it. Researchers think that deep moonquakes are probably caused
        by the Moon continuously stretching and relaxing. Shallow Moonquake:
        Shallow moonquakes originate just a few tens of kilometers below the
        surface. Scientists think that shallow moonquakes are probably the
        result of the Moon shrinking over time. The Moon is getting smaller
        because its interior is cooling. This shrinkage—imagine a grape drying
        into a raisin—creates stress within the Moon, which triggers moonquakes
        near the surface. Shallow moonquakes often last longer and are more
        powerful than other types of moonquakes. Meteorite: Moonquakes can be
        caused by impacts. When an asteroid, comet, or meteoroid strikes the
        Moon&quot;s surface, it can trigger moonquakes. Earth&quot;s relatively
        thick atmosphere causes most space debris to burn up from friction
        before it strikes our planet&quot;s surface. But the Moon isn&quot;t so
        lucky. Because there is almost no atmosphere, most space debris heading
        toward the Moon impacts its surface, sometimes causing giant craters and
        moonquakes. Artificial Impact: Artificial Impacts can be caused by
        objects that are made or produced by human beings rather than occurring
        naturally. These objects are launch vehicles and lunar modules that were
        directed at the lunar surface on purpose to create seismic sources of
        well defined timing and location. Saturn V was an American super
        heavy-lift launch vehicle developed by NASA under the Apollo program for
        human exploration of the Moon. Crash landing or launching of these heavy
        lifting vehicles can cause a moonquake. Lunar Module is a small craft
        used for traveling between the moons surface and an orbiting
        spacecraft.Lunar module cause far lighter impact on the moon than the
        launch vehicle but the impact still is significant.
      </p>
    </div>
    </div>
  );

  const text3 = (
    <div>
       <div>
      <p>
        The Apollo 11 seismometer returned data for just three weeks but
        provided a useful first look at lunar seismology. More advanced
        seismometers were deployed at the Apollo 12, 14, 15, and 16 landing
        sites and transmitted data to Earth until September 1977. Each of these
        seismometers measured all three components of ground displacement
        (up-down, north-south, and east-west).{" "}
      </p>
      <h4>Apollo 11</h4>
      <p>
        The Apollo 11 Lunar Module (LM) Eagle was the first crewed vehicle to
        land on the Moon. It carried two astronauts, Commander Neil A. Armstrong
        and LM pilot Edwin E. Buzz Aldrin, Jr., the first men to walk on the
        Moon. Also included on the LM was the Early Apollo Scientific Experiment
        Package (EASEP), which consisted of several self-contained experiments
        to be deployed and left on the lunar surface, and other scientific and
        sample collection apparatus.
      </p>
      <h4>Apollo 12</h4>
      <p>
        The Apollo 12 Lunar Module (LM) Intrepid was the second crewed vehicle
        to land on the Moon. It carried two astronauts, Commander Charles P.
        Pete Conrad and LM pilot Alan L. Bean, the third and fourth men to walk
        on the Moon. Also included on the LM was the Apollo Lunar Surface
        Experiments Package (ALSEP) containing scientific experiments to be
        deployed and left on the lunar surface and other scientific and sample
        collection apparatus. The experiments performed on the Moon, in addition
        to the ALSEP suite, were geologic sample collection, surface
        photography, soil mechanics investigations to study the physical
        properties of the lunar regolith, the solar wind composition experiment
        which collected samples of solar wind for return to Earth, and
        collection of parts of the Surveyor 3 spacecraft.
      </p>
      <h4>Apollo 15</h4>
      <p>
        The Apollo 15 lunar module (LM) Falcon was the fourth crewed vehicle to
        land on the Moon. It carried two astronauts, Commander David R. Scott
        and LM pilot James B. Irwin, the seventh and eighth men to walk on the
        Moon. The LM also carried a Lunar Roving Vehicle (LRV), an Apollo Lunar
        Surface Experiments Package (ALSEP) that contained scientific
        experiments to be deployed and left on the lunar surface, and other
        scientific and sample collection apparatus. The experiments performed on
        the Moon, in addition to the ALSEP suite, were geologic sample
        collection, surface photography, soil mechanics investigations to study
        physical properties of the lunar regolith, and the solar wind
        composition experiment which collected samples of solar wind particles
        for return to Earth.
      </p>
      <h4>Apollo 16</h4>
      <p>
        The Apollo 16 lunar module (LM) Orion was the fifth crewed vehicle to
        land on the Moon. It carried two astronauts, Commander John W. Young and
        LM pilot Charles M. Duke Jr., the ninth and tenth men to walk on the
        Moon. The LM also carried a Lunar Roving Vehicle (LRV), an Apollo Lunar
        Surface Experiments Package (ALSEP) that contained scientific
        experiments to be deployed and left on the lunar surface, and other
        scientific and sample collection apparatus. The experiments performed on
        the Moon, in addition to the ALSEP suite, were geologic sample
        collection, surface photography, soil mechanics investigations to study
        the physical properties of the lunar regolith, the solar wind
        composition experiment which collected samples of solar wind for return
        to Earth, a cosmic-ray detector to measure heavy cosmic rays, a
        far-ultraviolet camera for lyman-alpha astronomical observations, and a
        portable surface magnetometer to study local magnetic sources.
      </p>
      <h4>Apollo 17</h4>
      <p>
        The Apollo 17 Lunar Module (LM) Challenger was the sixth and last lunar
        lander in the Apollo program. It carried two astronauts, Commander
        Eugene A. Cernan and LM pilot Harrison H. Schmitt, the eleventh and
        twelfth men to walk on the Moon. Schmitt was the first
        scientist-astronaut to walk on the Moon. The LM also carried a Lunar
        Roving Vehicle (LRV), an Apollo Lunar Surface Experiments Package
        (ALSEP) that contained scientific experiments to be deployed and left on
        the lunar surface, and other scientific and sample collection apparatus.
      </p>
    </div>
    </div>
  );

 

  return (
    <div>
      <Link href="/">
      <Typography
      sx={{
        fontFamily: "Comfortaa",
        fontWeight: "bold",
        fontSize: "20px",
        color: "white",
        m: 2,
        display:"flex",
        justifyContent:"center"
      }}>
      Go Back {" >"}
    </Typography>
    </Link>
    <div>
    <Box sx={{ backgroundImage: 'url("bg.jpg")' }}>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        sx={{
          minWidth: 300,
          maxWidth: 900,
          boxShadow: 3,
          marginBottom: 4,
        }}>
        <CardContent>
          <Typography variant='subtitle2' color='text.secondary'>
            {text1}
          </Typography>
        </CardContent>
      </Card>
    </div>
    <Typography
      sx={{
        fontFamily: "Comfortaa",
        fontWeight: "bold",
        fontSize: "14px",
        color: "white",
        m: 2,
        display:"flex",
        justifyContent:"center"
      }}>
      Moonquake types
    </Typography>
    <div style={{ display: "flex", justifyContent: "center", marginBottom: 4 }}>
      <Card
        sx={{
          minWidth: 300,
          maxWidth: 900,
          boxShadow: 3,
          marginBottom: 4,
        }}>
        <CardContent>
          <Typography variant='subtitle2' color='text.secondary'>
            {text2}
          </Typography>
        </CardContent>
      </Card>
    </div>
    <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 4 }}>
      <Image
        src='/Apollo_11.jpg'
        width={500}
        height={700}
        layout='intrinsic'
        alt='apollo'
      />
    </Box>
    <Typography
      sx={{
        fontFamily: "Comfortaa",
        fontWeight: "bold",
        fontSize: "14px",
        color: "white",
        m: 2,
        display:"flex",
        justifyContent:"center"
      }}>
      Apollo Lunar Modules:
    </Typography>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        sx={{
          minWidth: 300,
          maxWidth: 900,
          boxShadow: 3,
          marginBottom: 4,
        }}>
        <CardContent>
          <Typography variant='subtitle2' color='text.secondary'>
            {text3}
          </Typography>
        </CardContent>
      </Card>
    </div>
  </Box>
  </div>
  </div>
  );
}
