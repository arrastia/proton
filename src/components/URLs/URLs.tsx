import { Labelled } from 'atoms/Labelled';
import { URLInput } from './components/URLInput';
import { URLList } from './components/URLList';

export const URLs = ({ id }: { id: string }) => (
  <Labelled label="url">
    <URLInput id={id} />
    <URLList id={id} />
  </Labelled>
);
