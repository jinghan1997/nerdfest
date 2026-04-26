from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
Path('images').mkdir(exist_ok=True)
imgs=[('logo.png','MRI • Hardware • AI',900,640),('seminar-room.png','Seminar / audience photo',1000,560),('lab-workshop.png','Hands-on lab workshop',1000,650),('teams-themes.png','Teams / themes graphic',1000,360),('stats.png','Event statistics',1000,180),('organizers.png','Organizers',1000,470),('chairs.png','Chairs',1000,450),('coordinators.png','Coordinators',900,720),('advisor.png','Advisor',280,270),('speakers.png','Invited speakers',980,430),('mentors.png','Invited mentors / team leads',1000,490),('venue-campus.png','CUHK-Shenzhen campus and lab',1000,360),('hotel-yangbang.png','Hotel 1',960,540),('hotel-crowne.png','Hotel 2',1000,650),('hotel-coli.png','Hotel 3',900,520),('hotel-kyriad.png','Hotel 4',1000,650),('sponsorship-table.png','Sponsorship package table',830,435),('sponsors.png','Current sponsors',870,770),('past-event.png','2024 ezMRI NerdFest',1000,560),('manuscript.png','ScienceDirect manuscript link',230,63)]
for fn,text,w,h in imgs:
    im=Image.new('RGB',(w,h),(234,244,255)); d=ImageDraw.Draw(im)
    d.rectangle((8,8,w-8,h-8),outline=(18,41,74),width=4)
    try: font=ImageFont.truetype('DejaVuSans-Bold.ttf',max(24,min(w,h)//12))
    except: font=None
    bbox=d.textbbox((0,0),text,font=font); x=(w-bbox[2]+bbox[0])//2; y=(h-bbox[3]+bbox[1])//2
    d.text((x,y),text,fill=(18,41,74),font=font)
    im.save(Path('images')/fn)
