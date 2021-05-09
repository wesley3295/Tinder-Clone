import React,{useState} from 'react'
import "./TinderCards.css"
import TinderCard from "react-tinder-card"
import { SwipeableDrawer } from '@material-ui/core'


const TinderCards = () => {

    const [lastDirection,setLastDirection]=useState()
    const [people,setPeople]=useState([
        {
            name:'Elon Musk',
            url:'data:image/jpeg;base64,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'
        },
        {
            name:'Jeff Bezos',
            url:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFRYZGBgYGBgZHBgaGhgYGBgaGhgaGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGBISHjEhISExNDE0MTExNDQ0NDE0NDQ0NDQ0NDQ0PzQ0NDQ0OjQ0MT8xNDQ0NDQ0MTExMTExNDExMf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EAD8QAAEDAgQDBQYEBAMJAAAAAAEAAhEDIQQSMVEFQWEGInGBkRMyobHB8EJS0eEUYnKSFdLxBxYjJENTgqLC/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECBAMF/8QAIBEBAQEBAAICAwEBAAAAAAAAAAECEQMhEjEyQVEiBP/aAAwDAQACEQMRAD8AxKeiJZOxqlHRRQ3xCk891Cr2sjGnYeCyGcO7KJh3ZhOyiXt9wG8IVA5SguOCQF0msEzup5UEYSe2wRAEzxZBFrUmuBHdIN+SIxtkzaYFgI5oFsoVPkpvYbJn6J2Lyhh8hMReJRGMB8krAogbRIE7lTc3WAiwClBQVywkdUnMMeCtU41N1J+WEFR50KIwukybEC0aWRC0QOtvsJi2AtBAJsimxthfT4yrLcI43sFkUg25lSLTCtfwp9FXe8AwedgtCu6kNY0mFCgyx8VZP6oFEdUDezHT0SRJ/mSQU28lIJi1TCCvXbEfFWS2RAVeuwxCk+tIFiJ9bIGoYPK7MTPRRdYlWXzLYiBrvdVsSe9bZZF2mRAKLCDhfdHmrBQMQh1h3UQq3g8Lm7zhabDdTWvjOtZzdXkDoYQuAmwV1mE2HmtCjRnVXGYUWlcuvJa68+HOWMMJ9wh1MFI91dD7BRfQ6LM1Xr8Z/HJvwpb7pjoearE3vbkujxNAXssPHUIW8+Sx568E17RA0RCFmsxWUhrrt0B26FaIfIkLpzqajj1i5vsvZpZUQVLaKIeVWQ6jJIvoZSc3dO4J0DssrDMUQ0CJhVvFRqzbLvfwQHqYokRGvPZV4jlKlZQeeuiBP3CFTBv1lMxvMc0Vw9IWhX/hz+Y+g/VJL2A/MfVJAJx+Smwz8EJtUE+SJS5eCB6p0nmUHFNNjyRcUABPVTIkLIeZA8YVWrhwLjUm6tU7NAMXKjXuD0KAuBHc8yiz97IOGENRXHmgs4TD53ARbmeS28OyfDl4KnwqgcgdzInrfRa1KnHouXy3tdvhzJOj0WhWAxQotsrtGnK85HtaHTpqT6YV1tKyG9ivxZmpWHi6XNYWPprrq9KywuIUrFRuVw3EWRI3U+BYokljrkXbO2yJxZl1j8Nflqtd/NB6g2Xt4dPDz57HVxqnbCUoZday6HEcDqoubCmExdogYCFIpnG6Z1ol0SSAANesoGjVMG3+anlQHP70T0QPF9RHJRru7pUhTA+hUWUdQTK0KEFJaXsuiSDOwrLE+MKxSiQNghU2wAArFJnemeSIHi6cidlLDmRdWKjARdApsyiFlUazGkDNyNk9Z0NPVRqUXEoxpyB0QQov7l0Ue7IPJRZh+7CM5loHgg6fAUYYwdB8lbY26bDuAA8I9BH0Vhrea5dz27sfUTp/VXaBuqrRdWaUBYkrd5xZDlF11GQoZwCt1iQHED6LGxrJBW9iXAbSd1g8RxbGgh72s3kgfBY+Pt6Z16cpj6MyuSqMyvI0OZdziK1J3u1GEzEZhJsOWvNcjxpkPK9MSys7ssdJh352NdrLR66H4gpyFX4IZotvMFw+JP1VpwAXTPpwa+0Ui1PCQ18kRCAD4pyfgpFs+STkEYHqqxHfVhvVBAl5OyB8Sy07JUjIBUqjpBHRKkIGkWQEzeKSF7cJIA0mWuZvr0RWuQ2FTYVpBDoY1hIaSfNRlIm8LKptKTzCYhRrvIaTEx6mOSCZP0Tsm/MyeijRuRNpjrEiSrvCquHxD3MbnaRPecIDoMSPPks61I9MeO69z9NnDvljSZmB4i2+11ffiMrNydBuqX8L7IBuaRJ70RqNDHh8USm4kgHSOfVeF+3TmWRgY3A4qs9zhXewA2Y05Gt6d2CfH0jlWx3Z3GOAmo9xg3NRxI2DZ+7rX4jxGqx2SmwmAIIAuZFy42YB0k+CwH4/iLqraQpOA9pBeGvdTym4Iql13RmME8oAWp2z0W8XeHvxlIgVHOLeZPe25+XwXS8OrPf3jMCIKzuH8OrF2V7zBPvOe58jWQ1xtO02XR4VmUFszAWNX29Y5ftNxqo12RkyZAgdFyX+7mIrumtVZTzSRneMxECTlm/L1XS4nh2fFul2UBstvEnbNcjdH4rwAmhDG03vLpc15cGOblIgR3i7NlOYkmGxoSrmxnV9enK4rsiwAD2zHEToRzJO8lYr6LqbiwmQN+U6jp5rYZ2efTw4a6GPDySWg3blbYwLyc2sqozBvNMlwMNgSdZH3qt95+2JOz6aPBMYxlEZ3AS9wG5iOS1C4OEjQ3HhqFw1U5A4tHevfa2vwXX8AB/h6U3OU35+8V65vXh5MfGS/wBW2bJwbwiRzQBVvpeyrxTywfuEm3RVXqCJKCTxCp0nd8nUG33sivrQLam4VWgAHg7lBbeNSdoTtNgoVjbunS26GxziRPJAsiStQkgzjTkAyQRefmEcHZRZOaIGWLFEC0JdU79045pzHNZCYVBlOJAmCZuZRAAYTuMWQPQMEHYifVdFw7ANa4RoQ6TykGP09VzZPRdLwPFZmBjot3b+Hd+fwC8/Jn110eDXLwq2KBeaV5a3MLWIOx5wrmCZaykMI0Bz4lxMeFtD5kpuFPmR1XjPp0a+1w0JktaB6RPVsXQBgnkmXACI7rQ0+Z1iVp0VJ7gPNOIp08M2mJi/qfEndKiNZ5odWsXOAZeNSrdNm+ynOtfTjePPyV2kbLbw7RUYNoWL2rZ37barS7N4oZAHESLapYqNXgQeZJMbEkj0+iw+P4QMYWjSPBdxXeI8lwvayvAI3CT7Sz04Om7OXt2B+S7XBtAYwAR3W22kCfmuHwxIzu3DmgDUmIXeubf7++S6MOfz3/Mh6TpHmovZtrqpsaGi26jUMAwtuY3tNtPqmqU5kbpVgQwnwUGP0k6hBUNNwmRp9hCYLytTKNOiA+iIEckFV1PITGjjJjXMefyVllpTOHdnZPQfI056oF7QpKPe2KSDKdxEh1gCJ1WjSqteJGq59+JZTAL5cbQAPmrNLFNIDmaH7utVG6NlINVfA1ZbJVmVLFJjYSIM35lIGVIOuFA4bJlXeH1crxJsTB+hVYD0UgFNTs41jXx1K7UUyWxmM2uOfO6zsOcjj4x6EoXDuMNa0B8gjmOfiE4rh8uGjnOI1/MeRFlz/G5rsms69xpOxobeVmOxb678jDlb+J30HVCxNPOMoMWVdmJpUID3weU2B81iXten03a59hTJpsLyB7sgOPh1WDh+1jmgmvSNK9pII/uHPoteljWOA7w9RBVLiHD2VoFiJutz+Dh+03awVajW0mlwHvEa/otjsvjCWkvESbeCbE8CpU3H3euizsTxKmyAD+IWH0Vs76iS39uyxPEYESuH7Q4ovMbiV0OBqtqnNlcABq7uz4Arm+MuGd5GgEDzUzPa6vpm8IYHPZIs05j4C/pK6ttYRbU6bHZYXDWhtLMBdwJPWHGAPRAwuIrOIe5zcriSGQZgdeR6Loznk64fJr5V1DXzrZO1sqhTfc7fqrrDZV5pVWAtg8v0QmC4Gwnqp1BDNVFtz/4IEKg18lBzoBB8lWkyOhVjEPGXwA+KCTfc8kOgIA0+sp6LpbdQomRtCCfr8Uk2Zu6SK5V9PM5roBgCx5xYKw1v4QAJOgVr/Duu6sYbBgXKvpFjCMytAVrMmASfYJUSYlS/X5pZoClhx8yoqw1JjdU7SpiEQ0Jn4lzO8Pdm55Cd/FO5W8A0OJa4SHNM8wRsVnc9PTx3mosUKweAWkSrlHCh1ngOHr8Fy1Rxwr4kmmTadW7CeY6m++66nhWKD2gi/guXlld0rI4p2fo5szczP6HOYPQFA/wdmWW4t7DtnZ6XE6LqK2EzhYWI7Jl5OjZ5z+y3NNyub4lw3DtEe3qPcf57+ENi/qp8E4ZSa4EMk7uOY9NdFtt7H5LhzdPvkrrOGikyZBMTKXRbKoVaobm6hcVxF5qPyMElx+yegWtx7iGR0cyP2+i43FYp7HNqscWua6Z8eRHMHZaxntePk1yXjs3YbIGtmcoAHWBE+evmhU6QboDbc29EsBx6hWaHOqNY50AscQCHRBjcbFaIw4IkGZ2uF0uHvVaiTz1K0GWieagyjlUmDvFSiFa+h1m3kk0RH9KZgk+qKwW10CyK3sy0TuE2IEtF4VnISPEBJ9AR1+SsUCi20KDBDTPVWWNgIbGwLCZN/VBm+2buElc/g2flSREHAqTRzTlycBaQSPmo1TY9I+aKwIYcCXSFKE9psALHnsVYpgx4FQGo2RqYUU4CI0JiJ6KeoI8pQMU1DFZKtPM4APdk8SZj5KrxPiFOg0ue7UWaLkwOQXF4rjj6z2PyhopuD2M1u2HDMfxGW/FamLqJNcsen8UwYe0ggGQuXwWKfhKkEksJuOberV1lHENexrm3DgCDuDcLO4rgQ8HcaHb9VyX1ePoT3Ot3BcWY5ocHCDtorzuIMyyvJ6lGtRJLHEDbkfJUKvG8Syb22SRflJ9vYDxBrmkmy5fjHG2tkZtBfRcHV7T4lzcswPASs1z6jz3pMqzN/aXc56XMXiTWeXHT6KnxVncJ6j5q/g8PGqB2gGVkbrefyZ3+Nrmwi0cQ9sZXuEaQ4gDyBQy2yTV1Pn/ppt4ziLf8apb+Y/WVcZ2kxI/6n/oz/KsVqkHLXIna6Gh2pxDf+27+pp/+SFo4TtcNKlMjqwhwudcpiPiuQEFTanwlPlXp3D+J0ao7jwT+Q2d07pvurxH+i8mbIWjR41iGCG1nRscr46DMDAWb4/418noT2obo5LiGdo8RN3hw2LGR8ACtXAdpmnu1Glp0zNkjXmDJAWbixflG1n6pKr/F0/zs/uCSnxp8osQphvRQY71RKlTKJudNB1QGCExpzFFGkqLT3j5LImfqpZ+8ANigVnkabpsRi2Ume0qHLaw5u5wArwXSYBJIAA1Og6krnuJdpw0ZKPed+ci3i0c/Fc/xfjL8QYMtZyYDbxduVntMBeucc+2br+FjMQ57i57i46lxMknx26aI+FZYeHzVN7eY3Whhhr4L1kZdV2Q40MvsHn3JLZP4eY8jPquubVBED9vJeROrOpva9ti107SPxBd5guIF7WvabGD4coXB58cvXd4N9nGnjMONSLdVk1uGsct3D4lr2+8Ji9/os3FAtP1Gi8I977URwNkTA9BKq43BNptm3wW1hcXNiRM6nmsDtHVzODcwIGsclZ20kU8BBl3WyyuNd4+C0cI8QQs7Fd6fNemPyY3f8sY0+6gBqM/EDSLDn5CfihncLt9enzk26KTEgkwLSFEHoitKiQphUSlOBKi1FDUAct06lzTOQP7Q7/JMmlJOQej+yEh3MIjSoSpMuud6CtKUXndQr1WsaXvcGtGpP3dcpxXtC98tpyxu/wCI+J5BXObpLeNbjPGRSOVhBeNRqG/1dVx2KxT6jsz3Fx3O2sDYKL3yoF269s5kZt6kAiO0Q2kHREKrKLNR1V7DWVOmLq5RWooeIZdaPZjiWR3s3GWONr2mfzeS5niOMzGG+78+qrYeq5pBaYuvDyc16euL8b165kDSHM9DzHQrRLA9mYG+hGq4bh3aQMaG4i4Is9hDx5xp4G/RdbwfiLCQWnMwnUX+PJcWsXLuxuaAxmFMESPlC53E4MM1dO3P4816Jj8AHtzt21B1XJYjhDi8A3J8/DzWM69t2emDw+iXudYxCx+N1MhLB7x16D916PQ4UKNNziLgOJtcwJgLyXGVHPe57tXGf0HpC6PFO21z+fXxkimAptkaKbaassw66c5cdobHWRWBQLIKNTatyIkGqQCk1qnoqhg1ReUznIZKCQN0nJBO5t9EDQkpd1JB6C9/JVsTj20WZnGSfdbzd16BW30+a4zjlQurvn8JDQOcAD9145z2t6vIFj8e+q6XnwHIeA+qpwiBuycNXtzjz6gApZBzTwlKAfso0U2zzU5lLKimYIk/6KpjsdmBa025nfoOiNi2EiB6ff3ZUG4Yqa79RYHTpyjnCkX5IzMMrNF34XJMxbWa+nA6fJHwlWpTOZjiJ1jQ9D6lXDSuULIWGRdp16JcSk1Z9O37L9twC2liBlBMB+rJP5tl3LGNLswA814yzCl4ORhcA2TALoG5jwXbdiuLOe32bne4BBOuTkOpBt6bmOTzeCT/AFl1+DzfK/HTW7Z4oswz8hu4hvXvG8eUryPGaAbn18Pl5L0Xt/V7tFkaufUmbw0Bon+8+i86x9UFwaLwbn6L18E5h5/9F7s+HpSrbWKFAQERz17xzAtYpmyG+tskXpaJF6G56gXymAlBIuTtCWRFAQMAlspuQ2lA2RJTzdE6DtuOY80KUt99xyt5xa58lw7iXGXGSTN1u9qsY19QMb+AEHbMYPwCwcyzmci6vUwU7T1QwVKDqtMk5MypyKJklBe1AYjZSDlUZVIVprg4IqYMpZIUHAhTa+VoJsKFWnzTuEJCpyKBqNSbHXkiub6Ku9vMckWnWQTwuLNPujNObMC1+QHo/wDMNLeO6t9nsaaVdjj+Ilro5Bx+N/kFTc1rhfy3H0VV7r2JWNZllazqyyul/wBpWM/5hjWm4oMBGxL6jif7XNXI4ehzKPxHFOxFZz36w1ttO60NHwCmDlCxjPJ7XWu3qT3hoVYOc9RjO7oFeY2AvTnWA20gEGo+bBEqOJsEmU4QQaxTayFKdkpQIBMCnjmnIQRfohtN/JTeUEpQaB1+CZR9p0CSnQQuJueevnqfO6jCQUsqqGAUgmhQcgOx0py2VVa+DPIq4Cr0VqtJVw4grRhBqUpUVGlit0ex0VB9JRDy1O8Gk124UXs5hAp4sHVHY6btKssoFPimDoKsObOohCfRTgHUd98kAO3RmmLOFlJ1MahQCwlPUqWKdcNClSso0KeZxdy5Jz9AuGpItY2gKcQEBzloJrISKQdKdAwYpQoF6YlZE3HZDc5M5Qc5Azihvek56C5yzasiecJIMpKdXjTKm1JJbYMUJ6SSUAforeH0HgnSSA3JIJJKqA5ArJJLNWKyNh9UklIjRYlT1TpLYFi0FmiSSgH+6PhfdH3zTpJ+4Cv5+Krt1SSWqCM1TfukkhUW6+qT9U6SyIckNySSAT0B6SSxWogkkkor/9k='
        }
    ])
const swiped=(direction,nameToDelete)=>{
    console.log("removing" + nameToDelete)
    setLastDirection(direction)
}
const outOfFrame=(name)=>{
console.log(name +"left the screen")
}

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                  { people.map((p) => {
            return (
            <TinderCard
            className="swipe"
            key={p.name}
            preventSwipe={["up","down"]}
            onSwipe={(dir)=> swiped(dir,p.name)}
            onCardLeftScreen={()=> outOfFrame(p.name)}
            >
                <div style={{backgroundImage: `url(${p.url}`}} className="card">
                    <h3>{p.name}</h3>
                </div>
            </TinderCard>
            )
            })}
            </div>
         
        </div>
    )
}

export default TinderCards
