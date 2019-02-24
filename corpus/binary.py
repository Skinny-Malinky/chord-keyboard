def main():
    words = readFile('./input/clean.txt')
    binary = toBinary(words)
    writeFile('./output/binary.txt', binary)

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
