class Difference:
    def __init__(self, a):
        self.__elements = a
        self.maximumDifference = self.computeDifference()

    def computeDifference(self):
        self.__elements.sort()
        return self.__elements[-1] - self.__elements[0]

_ = input()
a = [int(e) for e in input().split(' ')]

d = Difference(a)
d.computeDifference()

print(d.maximumDifference)