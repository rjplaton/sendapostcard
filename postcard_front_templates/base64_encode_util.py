import base64

with open("./arthur_fist.jpg", "rb") as f:
    encoded = base64.b64encode(f.read())
    print(encoded)

#with open("./good_thinking.jpg", "rb") as f:
#    encoded = base64.b64encode(f.read())
#    print(encoded)

#with open("./i_know_where_you_live.jpg", "rb") as f:
#    encoded = base64.b64encode(f.read())
#    print(encoded)
#    
#with open("./postcard_front_templates/is_pigeon.jpg", "rb") as f:
#    encoded = base64.b64encode(f.read())
#    print(encoded)


