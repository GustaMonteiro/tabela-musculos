import json

allMuscles = []

numberOfLines = 0
with open("musculos.txt") as file:
  while(file.readline()):
    numberOfLines+=1

numberOfMuscles = int(numberOfLines / 6)

print("Numero de musculos:", numberOfMuscles)

with open("musculos.txt") as file:
  for i in range(numberOfMuscles):
    name = file.readline().strip()
    origin = file.readline().strip()
    insertion = file.readline().strip()
    inervation = file.readline().strip()
    action = file.readline().strip()
    movePlan = file.readline().strip()

    muscle = {
        "name": name,
        "origin": origin,
        "insertion": insertion,
        "inervation": inervation,
        "action": action,
        "movePlan": movePlan,
        "imageId": i
    }

    allMuscles.append(muscle)

with open('muscles.json', 'w', encoding='utf8') as newJson:
  json.dump(allMuscles, newJson, ensure_ascii=False)
  newJson.write('\n')