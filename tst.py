# --- getList(filename), returns a list of strings --- # (open/create file and return lines of text as a list of strings)
def getList(filename):
  data = []
  with open(filename, 'r') as f:
    for line in f:
      data.append(line.strip())
  return data
# --- showList(data), returns nothing ---
# (receive list of strings and display them, or "nothing in list" message)
def showList(data):
  if len(data) == 0:
    print("Nothing in list")
  else:
    for i, item in enumerate(data):
      print(f"{i+1}. {item}")
# --- addToList(filename, data), returns a list of strings ---
# (prompt for an item to add to the list of strings and append to the file)
def addToList(filename, data):
  item = input("Enter item to add: ")
  data.append(item)
  with open(filename, 'w') as f:
    for line in data:
      file.write(line + '\n')
  return data
# --- deleteFromList(filename, data), returns a list of strings ---
# (prompt for item number to delete from the list of strings and write list to the file)
def deleteFromList(filename, data):
  showList(data)
  while True:
    try:
      item_number = int(input("Enter item number to delete: "))
      if 1 <= item_number <= len(data):
        del data[item_number - 1]
        with open(filename, 'w') as f:
          for line in data:
            f.write(line + '\n')
        return data
      else:
        print("Invalid item number.")
    except ValueError:
      print("Invalid input. Please enter a number.")
# --- main part of program ---
FILENAME = 'list.txt' # define the filename used to store the list
lineList = getList(FILENAME) # call the getList function to read the file into a list
while True: # this endless loop displays the list and prompts the user for a command
  showList(lineList) # call showList to show the current content
