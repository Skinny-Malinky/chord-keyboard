import json

def main():
    words = readFile('corpus/input/captions-timestamped.txt')
    # binary = toBinary(words)
    toJson(words)
    # writeFile('./output/binary.txt', binary)

def toJson(words):
    timestamp = "13:13"
    binary = ["000", "111", "011"]
    data = {}
    data['score'] = []
    data['score'].append({
        timestamp: binary
    })
    data['score'].append({
        timestamp: binary
    })

    with open('corpus/output/score.json', 'w') as outfile:
        json.dump(data, outfile)

def toBinary(input):
    input = input.lower()
    chars = list(input)
    arr = []
    offset = 96
    offset = 32
    for c in chars:
        unicode = ord(c) - offset
        # if unicode < 1 or unicode > 26:
        #     arr.append(c)
        # else:
        binary = "{0:07b}".format(unicode)
        arr.append(binary)
    return arr

def readFile(filename):
    f = open(filename, "rb")
    lines = f.readlines()
    f.close()
    text = ' '.join(lines)
    text = text.replace('\n', ' ')
    return text

def writeFile(filename, input):
    f = open(filename, "wb")
    for line in input:
        f.write(line)
        f.write("\n")
    f.close()

if __name__ == '__main__':
    main()
