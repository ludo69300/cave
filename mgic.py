#### initialisation des capteurs et fonctions internes #############
from machine import Pin, I2C
import BME280

# Initialize I2C communication
i2c = I2C(id=0, scl=Pin(1), sda=Pin(0), freq=10000)

# Initialize BME280 sensor
bme = BME280.BME280(i2c=i2c, addr=0x76)
pilote_chauffage=pin(3,pin.out)

# Initialize 
pilote_chauffage.off()
consigne=22
#########################################################################
def gestion_interne_et_affichages_capteurs(dico) :
    ################### Gestion interne et capteurs #####################
    temp= str(bme.temperature[:-1])
    hum = str(bme.humidity[:-1])
    pres = str(bme.pressure[:-3])
    print(temp)#debug
    if temp<consigne
        pilote_chauffage.on()
        pilote_chauffage_t='on'
    else
        pilote_chauffage.off()
        pilote_chauffage_t='off'
    print(pilote_chauffage_t)#debug
    ################ Actualisation des variables web  #############
    dico[temperature] = str(temp)
    dico[humidity] = str(hum)
    dico[pressure] = str(pres)
    
    ###################################################################    
    print (dico) # controle debug
    return(dico)



