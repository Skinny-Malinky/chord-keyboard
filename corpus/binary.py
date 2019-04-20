import json
import re

# delete punctuation or replace with a pause
# not sure what to do about numbers
# not using uppercase
pauseChars = r'-'
deleteChars = r'[^a-z\s]'

data = {}


def main():
    text = readFile('corpus/input/captions-timestamped.txt')
    for i in range(0, len(text), 2):
        getJson(i, text[i], text[i+1])
    writeJson('corpus/output/score.json')


def getJson(i, timestamp, words):
    captionNumber = i/2
    frame = getFrame(timestamp)
    # pad every line with a pause to stop lines running together
    words += ' '
    binary = getBinary(words)
    data[captionNumber] = {
        'timestamp': timestamp,
        'videoframe': frame,
        'words': words,
        'binary': binary
    }


def getFrame(timestamp):
    timestamp = timestamp.replace(':', '.')
    timestamp = float(timestamp)
    integer, decimal = divmod(timestamp, 1)
    integer *= 60
    decimal *= 100
    frame = integer + decimal
    frame = int(frame)
    return frame


def getBinary(words):
    words = words.lower()
    words = re.sub(pauseChars, ' ', words)
    words = re.sub(deleteChars, '', words)
    arr = []
    offset = 96
    for char in words:
        unicode = ord(char) - offset
        if char is ' ':
            unicode = 0
        binary = "{0:05b}".format(unicode)
        arr.append(binary)
    return arr


def readFile(filename):
    f = open(filename, "rb")
    lines = f.readlines()
    f.close()
    lines = map(str.strip, lines)
    return lines


def writeJson(filename):
    with open('corpus/output/score.json', 'w') as outfile:
        json.dump(data, outfile)


if __name__ == '__main__':
    main()
