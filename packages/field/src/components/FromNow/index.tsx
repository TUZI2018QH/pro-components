import { useIntl } from '@ant-design/pro-provider';
import { parseValueToMoment } from '@ant-design/pro-utils';
import { DatePicker, Tooltip } from 'antd-v4';
import moment from 'moment';
import type { ProFieldFC } from '../../index';

/**
 * 与当前的时间进行比较 http://momentjs.cn/docs/displaying/fromnow.html
 *
 * @param
 */
const FieldFromNow: ProFieldFC<{
  text: string;
  format?: string;
}> = ({ text, mode, render, renderFormItem, format, fieldProps }) => {
  const intl = useIntl();

  if (mode === 'read') {
    const dom = (
      <Tooltip title={moment(text).format(fieldProps?.format || format || 'YYYY-MM-DD HH:mm:ss')}>
        {moment(text).fromNow()}
      </Tooltip>
    );
    if (render) {
      return render(text, { mode, ...fieldProps }, <>{dom}</>);
    }
    return <>{dom}</>;
  }
  if (mode === 'edit' || mode === 'update') {
    const placeholder = intl.getMessage('tableForm.selectPlaceholder', '请选择');
    const momentValue = parseValueToMoment(fieldProps.value) as moment.Moment;
    const dom = (
      <DatePicker placeholder={placeholder} showTime {...fieldProps} value={momentValue} />
    );
    if (renderFormItem) {
      return renderFormItem(text, { mode, ...fieldProps }, dom);
    }
    return dom;
  }
  return null;
};

export default FieldFromNow;
