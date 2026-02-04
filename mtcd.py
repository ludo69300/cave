#initialisation des commandes, ....
#instanciation et initialisation
consigne_temp_nini=13
consigne_temp_nini=16

#fonctions_pilotées
def reglage_temp_nini(consigne_temp_nini)
    if temp<consigne_temp_nini
        pilote_chauffage.on()

#######################################################        
def traitement_commandes_dynamiques (commande):
    try :
        commande_split=commande.split('=')
        ##############################################
        if commande_split[0] == 'temp_nini':
            reglage_temp_nini(int(commande_split[1]))
        
        
        
    ##################################################
    except :
        pass
    

    
