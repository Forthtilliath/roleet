import { Text } from "../atoms/Text";
// TODO type props
export default function ScenarioList({ scenarios }) {
  return (
    <ul className="list-disc pl-5">
      {scenarios.map((scenario) => (
        <li key={scenario.id}>
          <Text>{scenario.title}</Text>
        </li>
      ))}
    </ul>
  );
}
