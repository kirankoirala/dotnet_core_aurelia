using Xunit;

namespace potato.tests
{
    // see example explanation on xUnit.net website:
    // https://xunit.github.io/docs/getting-started-dotnet-core.html
    public class PersonsTests
    {
        [Fact]
        public void Persons_Return_ListOfPerson()
        {
            var persons = potato.business.Person.GetPersons();
            Assert.IsType<string[]>(persons);
        }


        [Fact]
        public void Persons_Result_Contains_Kiran()
        {
            var persons = potato.business.Person.GetPersons();
            Assert.Contains("kiran", persons);
        }
    }
}
